import { ProductServiceService } from './../../../_service/product-service.service';
import { Product } from './../../../_models/product.model';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
 ProductListArray!: Product[];
 pagesSize :number = 9 ;
/* pagintion */
numberOfPagesArray :number[]=[];
productArrayToView : Product[] = [];
currentPage:number = 0;
  constructor(private productService:ProductServiceService) {
  }

  ngOnInit(): void{
  this.productService.getAllProducts().subscribe((res) => {
    console.log(res);
    this.ProductListArray = res.product;
    this.sliceArray();
    this.calculatePageNumbers();
  })
   this.productService.productChanged.subscribe(
    (res) => {
      console.log('product list', res);
      this.ProductListArray = res;
      this.sliceArray();
      this.calculatePageNumbers();





    }
  );





  }

  calculatePageNumbers(){

    const numberOfPages = Math.ceil(this.ProductListArray.length/this.pagesSize);
    for (let index = 0; index < numberOfPages; index++) {
     this.numberOfPagesArray.push(index+1);
    }
    this.productService.itemsdeleted.subscribe((next) => {
      this.ProductListArray = next;
      this.sliceArray();
      console.log(this.ProductListArray);
    });
  }

  sliceArray(){
    this.productArrayToView = this.ProductListArray.slice(this.currentPage * this.pagesSize , (this.currentPage*this.pagesSize)+this.pagesSize)
  }

  onpagintion(i:number){
    if(i > -1 && i < this.numberOfPagesArray.length){
      this.currentPage=i;
      this.sliceArray();
    }

  }

  search(){
    const InputValue = (event?.target as HTMLInputElement).value;
    const newArrSearch = [];
    for(var i = 0 ; i < this.ProductListArray.length ; i ++){
      if(this.ProductListArray[i].data[0].name === InputValue){
        newArrSearch.push(this.ProductListArray[i]);
      }
    }
    this.ProductListArray = newArrSearch;
    this.sliceArray();

  }
}
