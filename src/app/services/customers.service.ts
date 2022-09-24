import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getBalance(accno: number, pin: number): Observable<any>  {
   return this.http.get<any>(this.baseApiUrl + '/api/getBalance/' + accno + '?pin=' + pin)
  }

  setDeposit(accno: number, pin: number, newBal: number): Observable<any> {
    let obj = {pin,newBal};
    return this.http.put<any>(this.baseApiUrl + '/api/setDeposit/' + accno + '?pin=' + pin + '&newBal=' + newBal, obj)
  }

  setWithdraw(accno: number, pin: number, newBal: number): Observable<any> {
    let obj = {pin,newBal}
    return this.http.put<any>(this.baseApiUrl + '/api/setWithdraw/' + accno + '?pin=' + pin + '&newBal=' + newBal, obj)
  }


}
