import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { CatalogService } from "../../components/catalog/catalog.service";
import * as CatalogActions from "../actions/catalog.action";

@Injectable()
export class CatalogEffects {
  constructor(private actions: Actions, private service: CatalogService) {}

  @Effect()
  loadProductList = this.actions.pipe(
    ofType(CatalogActions.LOAD_PRODUCT_LIST_REQUEST),
    switchMap(() => {
      return this.service.loadCatalog().pipe(
        map(
          (data) => new CatalogActions.loadProductListSuccess({ data: data })
        ),
        catchError((error) =>
          of(new CatalogActions.loadProductListFailure({ error: error }))
        )
      );
    })
  );
}
