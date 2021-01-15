import { Action } from "@ngrx/store";
import { CatalogModel } from "../../models/CatalogModel";

export const LOAD_PRODUCT_LIST_REQUEST = "LOAD_PRODUCT_LIST_REQUEST";
export class loadProductListRequest implements Action {
  type = LOAD_PRODUCT_LIST_REQUEST;
  constructor() {}
}

export const LOAD_PRODUCT_LIST_SUCCESS = "LOAD_PRODUCT_LIST_SUCCESS";
export class loadProductListSuccess implements Action {
  type = LOAD_PRODUCT_LIST_SUCCESS;
  constructor(public payload: { data: any }) {}
}

export const LOAD_PRODUCT_LIST_FAILURE = "LOAD_PRODUCT_LIST_FAILURE";
export class loadProductListFailure implements Action {
  type = LOAD_PRODUCT_LIST_FAILURE;
  constructor(public payload: { error: any }) {}
}

export const SELECT_CATEGORY = "SELECT_CATEGORY";
export class selectCategory implements Action {
  type = SELECT_CATEGORY;
  constructor(public payload: { category: string }) {}
}

export const ADD_TO_CART = "ADD_TO_CART";
export class addToCart implements Action {
  type = ADD_TO_CART;
  constructor(public payload: { product: CatalogModel }) {}
}

export type ActionsUnion =
  | loadProductListRequest
  | loadProductListSuccess
  | loadProductListFailure
  | selectCategory
  | addToCart;
