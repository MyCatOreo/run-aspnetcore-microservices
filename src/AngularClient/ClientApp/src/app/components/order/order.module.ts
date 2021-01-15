import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderPageComponent } from "./order-page/order-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: OrderPageComponent }]),
  ],
  declarations: [OrderPageComponent],
  bootstrap: [OrderPageComponent],
  exports: [OrderPageComponent],
  entryComponents: [OrderPageComponent],
})
export class OrderModule {}
