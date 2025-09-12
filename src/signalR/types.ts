// src/services/types.ts
export type TakeAwayOrder = {
  Id: number;
  // add other fields that come from backend
  [key: string]: unknown;
};

export type SignalREvent =
  | "disconnected"
  | "takeAwayNewOrdersSignal";

export type SignalRPayloads = {
  disconnected: null;
  takeAwayNewOrdersSignal: TakeAwayOrder[];
};
