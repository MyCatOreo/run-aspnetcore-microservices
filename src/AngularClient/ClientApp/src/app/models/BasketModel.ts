import { BasketItemModel } from "./BasketItemModel";

export interface BasketModel {
  userName: string;
  items: BasketItemModel[];
  totalPrice: number;
}
