// src/services/signalRService.ts
import { hubConnection } from "signalr-no-jquery";
import { signalRListener } from "./listener";
import { store } from "../redux/store";
import type { SignalRPayloads } from "./types";

const AppConfig = window.posconfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let hubProxy: any;

export const initSignalR = () => {
  if (!("posconfig" in window) || !AppConfig.signalRUrl) {
    console.warn("SignalR config not found, skipping init");
    return;
  }

  if (window.location.pathname.includes("kitchen")) return;

  console.log("Initializing SignalR...");

  const connection = hubConnection(
    AppConfig.DEV_ENV_LOCAL
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

  // Start connection
  connection
    .start({ jsonp: true })
    .done(() =>
      console.log("SignalR connected, connection ID=" + connection?.id)
    )
    .fail(() => console.log("Could not connect"));
};
