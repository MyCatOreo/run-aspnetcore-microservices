import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { appReducers, metaReducers } from "./state/reducers";
import { appEffects } from "./state/effects";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/ui/nav-menu/nav-menu.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot(appEffects),
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      {
        path: "Order",
        loadChildren: () =>
          import("./components/order/order.module").then((m) => m.OrderModule),
        pathMatch: "full",
      },
      {
        path: "Product",
        loadChildren: () =>
          import("./components/catalog/catalog.module").then(
            (m) => m.CatalogModule
          ),
        pathMatch: "full",
      },
      {
        path: "Cart",
        loadChildren: () =>
          import("./components/basket/basket.module").then(
            (m) => m.BasketModule
          ),
        pathMatch: "full",
      },
      {
        path: "Contact",
        component: ContactComponent,
        pathMatch: "full",
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
