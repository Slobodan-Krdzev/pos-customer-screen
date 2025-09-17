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

  // Handle disconnection
  connection.disconnected(() => {
    window.dispatchEvent(
      new CustomEvent("signalr:disconnected", {
        detail: "Your system has lost internet connection",
      })
    );

    signalRListener(store.dispatch, "disconnected", null);
  });

  // === Register all hub signals ===
  hubProxy.on(
    "takeAwayNewOrdersSignal",
    (data: SignalRPayloads["takeAwayNewOrdersSignal"]) => {
      signalRListener(store.dispatch, "takeAwayNewOrdersSignal", data);
    }
  );

  hubProxy.on("mirrorDataSignal", (data: string | DataPayload) => {

    // Handle null or "null" as reset
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
    if (parsed && typeof parsed === 'object' && parsed.ListOfProducts) {
      store.dispatch(setPayload(parsed));
    } else {
      console.warn("mirrorDataSignal payload is not a valid DataPayload:", parsed);
    }
  });

  // Start connection
  connection
    .start({ jsonp: true })
    .done(() => {
      console.log("SignalR connected, connection ID=" + connection?.id);
      // Fetch data using connection.id
      if (connection?.id) {
        fetch(
          `${AppConfig.signalRUrl}/api/v2/registerdrivethrough?connectionId=${connection.id}`
        )
          .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
          })
          .then(() => {
            // You can dispatch to Redux or handle data here
          })
          .catch((err) => {
            console.error("Fetch error:", err);
          });
      }
    })
    .fail(() => console.log("Could not connect"));
};
