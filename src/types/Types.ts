export interface DataPayload {
  BillNumber: string;
  ListOfProducts: Product[];
  TimeActivation: string;
}

export interface Modifier {
  IdProduct: number;
  Price: number;
  Name: string;
}

export interface Product {
  IdProduct: number;
  Modifiers: Modifier[];
  Name: string;
  Price: number;
  Quantity: number;
}
