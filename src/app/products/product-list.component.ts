import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
// Services
import {ProductService} from './product.service';

@Component({
    // selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
pageTitle = 'Product Listing ';
imageWidth = 50;
imageMargin = 2;
showImage = false;
     _listFilter: string;
     get listFilter() {
        return this._listFilter;
    }
     set listFilter(value) {
        this._listFilter = value;
        this.filterdProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
filterdProducts: IProduct[];
products: IProduct[] = [];


  // Service
  private _productService;
  errorMessage: string;

constructor(productService: ProductService) {
    // Initialize service
    this._productService = productService;

}

  toggleImage(): void {
        this.showImage = !this.showImage;
  }

  ngOnInit(): void {
      this._productService.getProducts().subscribe(
        products => {
            this.products = products;
            this.filterdProducts = this.products;
        },
        error => this.errorMessage = <any>error
      );
}

performFilter(filterBy: string): IProduct[] {
filterBy = filterBy.toLocaleLowerCase();
return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

// This is the method that handles the event that is been emit from the star component

onRatingClicked(message: ByteString): void {

   this.pageTitle = 'Product List: ' +  message;
}
}
