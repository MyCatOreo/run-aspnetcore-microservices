import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductPageComponent } from "./product-page/product-page.component";
import { RouterModule } from "@angular/router";
import { ProductItemComponent } from "../ui/product-item/product-item.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ProductPageComponent }]),
  ],
  declarations: [ProductPageComponent, ProductItemComponent],
  bootstrap: [ProductPageComponent],
  exports: [ProductPageComponent],
  entryComponents: [ProductPageComponent],
})
export class CatalogModule {}
