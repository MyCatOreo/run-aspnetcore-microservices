import { createSelector } from "@ngrx/store";
import { BasketItemModel } from "../../models/BasketItemModel";
import * as CatalogActions from "../actions/catalog.action";

export interface BasketState {
  userName: string;
  items: BasketItemModel[];
  // totalPrice: number;
}

export const initialState: BasketState = {
  userName: undefined,
  items: [],
};

export const basketReducer = (
  state = initialState,
  action: { type: string; payload?: any }
): BasketState => {
  switch (action.type) {
    case CatalogActions.ADD_TO_CART: {
      console.log("add item in basket reducer", action.payload.product);
      return {
        ...state,
        items: state.items.concat(action.payload.product),
      };
    }

    default: {
      return state;
    }
  }
};

export const getCartItems = (state: BasketState) => state.items;
