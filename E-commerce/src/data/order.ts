
export interface Order {
    idReceipt: string;
    accountName: string | null;
    total: number;
    date: string;
    ListSP: {
      idProduct: string;
      productName: string;
      unitPrice: number;
      totalPrice: number;
      quantity: number;
    }[];
}

export interface RawOrderItem {
    idProduct: string;
    quantity: number;
    idReceipt: string;
    receipt: {
      userId: string;
      date: string;
      accountName: string | null;
    };
    product: {
      id: string;
      productName: string;
      unitPrice: number;
      totalPrice: number;
    };
  }