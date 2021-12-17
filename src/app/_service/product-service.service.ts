import { Product } from './../_models/product.model';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private products!: Product[];
  // private products: Product[] = [
  //   {
  //     id: 1,
  //     basicData: [{ id: 1, name: 'camera', desc: 'amazing camera' }],
  //     categories: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'visa' }],
  //     price: 8321,
  //     imgurl: 'assets/img/layout-styles.png',
  //     tags:[{id:1,name:'html'}],
  //     relatedProduct:[2,6,7,8]
  //   },
  //   {
  //     id: 2,
  //     basicData: [{ id: 1, name: 'mob', desc: 'amazing camera' }],
  //     categories: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'visa' }],
  //     price: 8321,
  //     imgurl: 'assets/img/layout-styles.png',
  //     tags:[{id:1,name:'html'}],
  //     relatedProduct:[2,6,9,4]

  //   },
  //   {
  //     id: 3,
  //     basicData: [{ id: 1, name: 'mac', desc: 'amazing camera' }],
  //     categories: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'visa' }],
  //     price: 8321,
  //     imgurl: 'assets/img/layout-styles.png',
  //     tags:[{id:1,name:'html'}],
  //     relatedProduct:[9,6,7,4]

  //   },
  //   {
  //     id: 4,
  //     basicData: [{ id: 1, name: 'lap', desc: 'amazing camera' }],
  //     categories: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'visa' }],
  //     price: 8321,
  //     imgurl: 'assets/img/layout-styles.png',
  //     relatedProduct:[3,6,9,8]

  //   },
  //   {
  //     id: 5,
  //     basicData: [{ id: 1, name: 'tv', desc: 'amazing camera' }],
  //     categories: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'visa' }],
  //     price: 8321,
  //     imgurl: 'assets/img/layout-styles.png',
  //     relatedProduct:[6,5,7,8]

  //   },
  //   {
  //     id: 6,
  //     basicData: [{ id: 1, name: 'ipad', desc: 'amazing camera' }],
  //     categories: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'visa' }],
  //     price: 8321,
  //     imgurl: 'assets/img/layout-styles.png',
  //     relatedProduct:[9,7,8,3]

  //   },
  //   {
  //     id: 7,
  //     basicData: [{ id: 1, name: 'playstation', desc: 'amazing camera' }],
  //     categories: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'visa' }],
  //     price: 8321,
  //     imgurl: 'assets/img/layout-styles.png',
  //     relatedProduct:[4,6,7,8]

  //   },
  //   {
  //     id: 8,
  //     basicData: [{ id: 1, name: 'macBook', desc: 'amazing camera' }],
  //     categories: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'visa' }],
  //     price: 8321,
  //     imgurl: 'assets/img/layout-styles.png',
  //     relatedProduct:[2,5,7,3]

  //   },
  //   {
  //     id: 9,
  //     basicData: [{ id: 1, name: 'xbox', desc: 'amazing camera' }],
  //     categories: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'visa' }],
  //     price: 8321,
  //     imgurl: 'assets/img/layout-styles.png',
  //     relatedProduct:[2,7,8,3]

  //   },
  // ];
  url = environment.baseurl;

  public itemAdded = new EventEmitter();
  public itemsdeleted = new EventEmitter();
  public productChanged = new EventEmitter();
constructor(private http : HttpClient){}

  getAllProducts():Observable<{product : Product[]}>{
    return this.http.get<{product : Product[]}>(`${this.url}product`);
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id)
  }

  Addproduct(product: Product):Observable<any> {
    return this.http.post(`${this.url}product/add`,product)
  }


  UpdateProduct(product: Product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
    this.productChanged.emit([...this.products]);
    return [...this.products];
  }


  DeleteProduct(id: number | undefined) {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
    this.itemsdeleted.emit([...this.products]);
  }


}
function product(arg0: string, product: any) {
  throw new Error('Function not implemented.');
}

