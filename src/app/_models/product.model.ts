import { Category } from './category.model';
import { data } from "./data.model";
import { Payment } from "./payment.model";
import { Tag } from './tag.model';

export interface Product{
    id?:number;
    data:data[];
    price?: number;
    discount?: number;
    paymentTypeMethods:Payment[];
    categoryId?:number;
    tags?:Tag[];
    imagesUrls?: string[];
    relatedProduct?:number[];
}
