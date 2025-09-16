// src/services/signalRService.ts
import { hubConnection } from "signalr-no-jquery";
import { signalRListener } from "./listener";
import { store } from "../redux/store";
import type { SignalRPayloads } from "./types";
import { setOrders } from "../redux/ordersSlice";
import type { ProductType } from "../types/Types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let hubProxy: any;

export const initSignalR = () => {
  if (!("posconfig" in window)) {
    console.warn("SignalR config not found, skipping init");
    return;
  }

  if (window.location.pathname.includes("kitchen")) return;

  console.log("Initializing SignalR...");

  const connection = hubConnection(
    "http://dev.revelapps.com:9095/signalr/hubs"
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

  hubProxy.on("mirrorDataSignal", (data: string | ProductType[]) => {

    let parsed: ProductType[];

    if (typeof data === "string") {
      try {
        parsed = JSON.parse(data);
      } catch (err) {
        console.error("Failed to parse mirrorDataSignal:", err);
        return;
      }
    } else {
      parsed = data;
    }

    if (Array.isArray(parsed)) {
      store.dispatch(setOrders(parsed));
    } else {
      console.warn("mirrorDataSignal payload is not an array:", parsed);
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
          `http://dev.revelapps.com:9095/api/v2/registerdrivethrough?connectionId=${connection.id}`
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
