// src/services/listener.ts
import type { AppDispatch } from "../redux/store";
import type { SignalREvent, SignalRPayloads } from "./types";

export function signalRListener<E extends SignalREvent>(
  dispatch: AppDispatch,
  event: E,
  data: SignalRPayloads[E]
) {
  switch (event) {
    case "takeAwayNewOrdersSignal":
      if (Array.isArray(data) && data.length > 0) {
        console.log("takeAwayNewOrdersSignal", data);
        // TODO: dispatch or handle new orders here
      }
      break;

    case "disconnected":
      console.log("SignalR disconnected (listener)");
      break;

    default:
      console.warn("Unhandled SignalR event:", event);
  }
}
