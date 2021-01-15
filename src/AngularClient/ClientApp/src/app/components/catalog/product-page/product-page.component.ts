import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CatalogModel } from "../../../models/CatalogModel";
import { CatalogService } from "../catalog.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"],
})
export class ProductPageComponent implements OnInit {
  constructor(private service: CatalogService) {
    this.service.load();
  }

  productList$: Observable<CatalogModel[]>;
  categoryList$: Observable<string[]>;
  selectedCategory$: Observable<string>;

  ngOnInit() {
    this.productList$ = this.service.getProductList();
    this.categoryList$ = this.service.getCategoryList();
    this.selectedCategory$ = this.service.getSelectedCategory();
  }

  onCategoryClickedHandler = ($event, category: string) => {
    this.service.setSelectedCategory(category);
  };

  onAddToCart = (product: CatalogModel) => {
    this.service.addProductToCart(product);

    // var product = await _catalogApi.GetCatalog(productId);

    // var userName = "swn";
    // var basket = await _basketApi.GetBasket(userName);

    // basket.Items.Add(new BasketItemModel
    // {
    //     ProductId = productId,
    //     ProductName = product.Name,
    //     Price = product.Price,
    //     Quantity = 1,
    //     Color = "Black"
    // });

    // var basketUpdated = await _basketApi.UpdateBasket(basket);

    // return RedirectToPage("Cart");
  };
}
