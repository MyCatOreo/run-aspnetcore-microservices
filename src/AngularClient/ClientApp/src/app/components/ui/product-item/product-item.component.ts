import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { CatalogModel } from "../../../models/CatalogModel";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"],
})
export class ProductItemComponent implements OnInit {
  @Input() product: CatalogModel;
  @Output() addToCartEvent = new EventEmitter<CatalogModel>();

  constructor() {}

  ngOnInit(): void {}
}
