import { ProductServiceService } from './../../../_service/product-service.service';
import { Product } from './../../../_models/product.model';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
@Input() product!: Product;

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
  }

  getPrice(){
    // return this.product.discount ? this.product.price - this.product.discount : this.product.price;
  }
  getItem(){
    this.productService.itemAdded.emit(this.product);
  }
  Delete(id:number|undefined){
    this.productService.DeleteProduct(id);
    console.log(id);
  }

}
