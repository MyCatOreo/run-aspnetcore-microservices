import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "../../../environments/environment";

import * as catalogReducer from "./catalog.reducer";
import * as basketReducer from "./basket.reducer";

export interface AppState {
  catalog: catalogReducer.CatalogState;
  basket: basketReducer.BasketState;
}

export const appReducers: ActionReducerMap<AppState> = {
  catalog: catalogReducer.catalogReducer,
  basket: basketReducer.basketReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const catalogState = (state: AppState) => state.catalog;
export const selectProductList = createSelector(
  catalogState,
  catalogReducer.getProductList
);
export const selectCategoryList = createSelector(
  catalogState,
  catalogReducer.getCategoryList
);
export const selectSelectedCategory = createSelector(
  catalogState,
  catalogReducer.getSelectedCategory
);
export const selectFilteredProductList = createSelector(
  catalogState,
  catalogReducer.getFilteredProductList
);

export const basketState = (state: AppState) => state.basket;
export const selectCartItems = createSelector(
  basketState,
  basketReducer.getCartItems
);
