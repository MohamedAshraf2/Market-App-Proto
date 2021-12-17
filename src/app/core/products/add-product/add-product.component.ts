import { ProductServiceService } from './../../../_service/product-service.service';
import { Product } from './../../../_models/product.model';
import { Category } from './../../../_models/category.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Payment } from 'src/app/_models/payment.model';
import { CategoryService } from 'src/app/_service/category.service';
import { PaymentService } from 'src/app/_service/payment.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  category!: Category[];
  payment!: Payment[];
  product = <Product>{};
  isEditMode = false;
  @ViewChild('myForm') form!: ElementRef;
  constructor(
    private categoryService: CategoryService,
    private paymentService: PaymentService,
    private productService: ProductServiceService,
    private router:Router,
    private activateRoute:ActivatedRoute
  ) {
    this.product={
      id:1,
      data:[{name:"camera",description:"this is camera"}],
      paymentTypeMethods:[],
      tags:[],

    }
  }

  ngOnInit(): void {

     this.categoryService.getAllCat().subscribe((res) => {
       this.category = res as Category[];
       console.log(this.category);
     })
    this.payment = this.paymentService.getAllPayment();
    const productId = this.activateRoute.snapshot.params.id;
    if(productId){
    const product =  this.productService.getProductById(+productId);
      // this.product ={...product}
      // this.isEditMode = true;
    }
  }

  onSubmit(form: NgForm) {

    this.product.paymentTypeMethods = [];
    for (let index = 0; index < this.payment.length; index++) {
      if (form.value['check_' + index])
        this.product.paymentTypeMethods.push(this.payment[index]);
    }

    if(this.isEditMode){
      this.productService.UpdateProduct(this.product);
    }else{
      this.productService.Addproduct(this.product).subscribe(
        (res)=>{console.log(res)}
      );
    }
    this.router.navigateByUrl('home');
    console.log(this.product);
  }

  onTag(taginput: HTMLInputElement) {
    this.product.tags?.push({ name: taginput.value });
    taginput.value = '';
  }
}
