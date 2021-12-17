import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/_models/Filter.model';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
Filter:Filter[];
  constructor() {
    this.Filter = [
     {name:"Arts & Crafts"},
     {name:"Automotive"},
     {name:"Baby"},
     {name:"Eletronics"},
     {name:"Women's Fashion"},
     {name:"Men's Fashion"},
     {name:"Health & Household"},
     {name:"Home & Kitchen"},
     {name:"Military Accessories"},
     {name:"Movies & Television"},
     {name:"Sports & Outdoors"},
     {name:"Tools & Home Improvement"},
     {name:"Toys & Games"}
    ]
  }

  ngOnInit(): void {
  }

}
