// src/services/signalRService.ts
import { hubConnection } from "signalr-no-jquery";
import { signalRListener } from "./listener";
import { store } from "../redux/store";
import type { SignalRPayloads } from "./types";
import { clearPayload, setPayload } from "../redux/ordersSlice";
import type { DataPayload } from "../types/Types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let hubProxy: any;

const AppConfig = window.posconfig;

export const initSignalR = () => {
  if (!("posconfig" in window)) {
    console.warn("SignalR config not found, skipping init");
    return;
  }

  if (window.location.pathname.includes("kitchen")) return;

  console.log("Initializing SignalR...");

  const connection = hubConnection(
    AppConfig
      ? AppConfig.signalRUrl
      : window.location.origin + "/signalr/hubs"
  );

  hubProxy = connection.createHubProxy("layout");

  // === Register all hub signals ===
  hubProxy.on(
    "takeAwayNewOrdersSignal",
    (data: SignalRPayloads["takeAwayNewOrdersSignal"]) => {
      signalRListener(store.dispatch, "takeAwayNewOrdersSignal", data);
    }
  );

  hubProxy.on("mirrorDataSignal", (data: string | DataPayload) => {
    if (data === null || data === "null") {
      store.dispatch(clearPayload());
      return;
    }

    let parsed: DataPayload | null = null;
    if (typeof data === "string") {
      try {
        parsed = JSON.parse(data);
      } catch (err) {
        console.error("Failed to parse mirrorDataSignal as DataPayload:", err);
        return;
      }
    } else {
      parsed = data;
    }
    if (parsed && typeof parsed === "object" && parsed.ListOfProducts) {
      store.dispatch(setPayload(parsed));
    } else {
      console.warn("mirrorDataSignal payload is not a valid DataPayload:", parsed);
    }
  });

  // --- Helper to start/restart connection ---
  const startConnection = () => {
    connection
      .start({
        jsonp: true,
        transport: ["webSockets", "longPolling"],
        keepAlive: false, // avoid bug
      })
      .done(() => {
        // console.log("SignalR connected, connection ID=" + connection?.id);

        // Register drive-through once connected
        if (connection?.id) {
          fetch(
            `${AppConfig.signalRUrl}/api/v2/registerdrivethrough?connectionId=${connection.id}`
          )
            .then((res) => {
              if (!res.ok) throw new Error("Network response was not ok");
              return res.json();
            })
            .catch((err) => {
              console.error("Fetch error:", err);
            });
        }
      })
      .fail(() => {
        console.log("Could not connect, retrying in 5s...");
        setTimeout(startConnection, 5000);
      });
  };

  // --- Handle disconnect & auto-reconnect ---
  connection.disconnected(() => {
    console.warn("SignalR disconnected. Reconnecting in 5s...");

    window.dispatchEvent(
      new CustomEvent("signalr:disconnected", {
        detail: "Your system has lost internet connection",
      })
    );

    signalRListener(store.dispatch, "disconnected", null);

    setTimeout(startConnection, 1000); // auto-reconnect
  });

  // Kick off first connection
  startConnection();
};
