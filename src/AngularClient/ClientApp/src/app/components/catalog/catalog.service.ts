import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  AppState,
  catalogState,
  selectCategoryList,
  selectSelectedCategory,
  selectFilteredProductList,
} from "../../state/reducers";
import * as CatalogActions from "../../state/actions/catalog.action";
import { of } from "rxjs";
import { productList } from "../../../assets/data/products";
import { CatalogModel } from "../../models/CatalogModel";

@Injectable({
  providedIn: "root",
})
export class CatalogService {
  constructor(private store: Store<AppState>) {}

  catalogApi = "http://localhost:7000/getProducts-ish-api";

  loadCatalog = () => {
    return of(productList);
    //  return this.http.get(this.catalogApi);
  };

  load() {
    this.store.dispatch(new CatalogActions.loadProductListRequest());
  }

  getCatalog() {
    return this.store.select(catalogState);
  }

  getProductList() {
    return this.store.select(selectFilteredProductList);
  }

  getCategoryList() {
    return this.store.select(selectCategoryList);
  }

  getSelectedCategory() {
    return this.store.select(selectSelectedCategory);
  }

  setSelectedCategory(category: string) {
    this.store.dispatch(
      new CatalogActions.selectCategory({ category: category })
    );
  }

  addProductToCart(product: CatalogModel) {
    this.store.dispatch(new CatalogActions.addToCart({ product: product }));
  }
}
