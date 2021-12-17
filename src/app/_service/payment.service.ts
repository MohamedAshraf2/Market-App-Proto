import { Injectable } from '@angular/core';
import { Payment } from '../_models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
payment!:Payment[];
  constructor() {
    this.payment = [
      {id:1 , name: "Direct Bank"},
      {id:2 , name: "Cheque Payment"},
      {id:3 , name: "Paypal"},
      {id:4 , name: "Visa"},
      {id:5 , name: "Mastercard"},
      {id:6 , name: "On Dilivery"},
    ]
  }
  getAllPayment(){
    return [...this.payment]
  }
}
