import { ProductServiceService } from './../../../_service/product-service.service';
import { Product } from './../../../_models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!:Product;
  relatedProductArr: Product[] = [];
  constructor(private productService:ProductServiceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((res)=>{
      const product = this.productService.getProductById(res.id);
      console.log(product);
      if(!product){
        alert('error happened');
      }else{
        this.product = product;
        this.relatedProductArr = [];
        this.product.relatedProduct?.map((productId) => {
          const rproduct =this.productService.getProductById(productId);
          rproduct && this.relatedProductArr.push(rproduct);
        })
      }
    });

  }

}
