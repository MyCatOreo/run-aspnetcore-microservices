import { createSelector } from "@ngrx/store";
import { CatalogModule } from "../../components/catalog/catalog.module";
import { CatalogModel } from "../../models/CatalogModel";
import * as CatalogActions from "../actions/catalog.action";

export interface CatalogState {
  productList: CatalogModel[];
  categoryList: string[];
  selectedCategory: string;
}

export const initialState: CatalogState = {
  productList: [],
  categoryList: [],
  selectedCategory: undefined,
};

export const catalogReducer = (
  state = initialState,
  action: { type: string; payload?: any }
): CatalogState => {
  switch (action.type) {
    case CatalogActions.LOAD_PRODUCT_LIST_REQUEST: {
      return {
        ...state,
      };
    }

    case CatalogActions.LOAD_PRODUCT_LIST_SUCCESS: {
      return {
        ...state,
        productList: action.payload.data,
        categoryList: action.payload.data
          .map((d) => d.category)
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          }),
        selectedCategory: undefined,
      };
    }

    case CatalogActions.SELECT_CATEGORY: {
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    }

    case CatalogActions.LOAD_PRODUCT_LIST_FAILURE: {
      return {
        ...state,
      };
    }

    case CatalogActions.ADD_TO_CART: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export const getProductList = (state: CatalogState) => state.productList;
export const getCategoryList = (state: CatalogState) => state.categoryList;
export const getSelectedCategory = (state: CatalogState) =>
  state.selectedCategory;
export const getFilteredProductList = createSelector(
  getProductList,
  getSelectedCategory,
  (products, category) => {
    if (category === undefined) {
      return products;
    }

    return products.filter((p) => p.category === category);
  }
);
