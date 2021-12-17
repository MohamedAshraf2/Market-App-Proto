import { ProductServiceService } from './../../_service/product-service.service';
import { Product } from './../../_models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 itemAdded : Product[] = [];
 totalPrice :number = 0;
  constructor(private productService :ProductServiceService) {
  }

  ngOnInit(): void {
    this.productService.itemAdded.subscribe(
      (next) => {

        this.itemAdded.push(next);
        this.totalPrice += next.price;

      }
    )
  }

}
