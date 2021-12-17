import { User } from './../_models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseurl
  constructor(private http : HttpClient) { }

  register(user:User):Observable<any>{
   return this.http.post(`${this.url}user/register`,user)
  }
  login(user:User):Observable<any>{
    return this.http.post(`${this.url}user/login`,user)
   }
   isAuth():boolean{
     if(sessionStorage.getItem('token')){
       return true;
     }else{
       return false;
     }
   }
}
