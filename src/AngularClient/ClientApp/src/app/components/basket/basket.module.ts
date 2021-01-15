import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: CartPageComponent }]),
  ],
  declarations: [CartPageComponent],
  bootstrap: [CartPageComponent],
  exports: [CartPageComponent],
  entryComponents: [CartPageComponent],
})
export class BasketModule {}
