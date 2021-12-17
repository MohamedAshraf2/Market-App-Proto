import { Category } from './../_models/category.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
// category!:Category[];
url = environment.baseurl;

  constructor(private http:HttpClient) {

  }
  getAllCat(){
    return this.http.get(`${this.url}category`)
    // return [...this.category];
  }
  // getCatById(id:number){
  //   // return (this.category.find((cat)=> cat.id === id));
  // }
}
