import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  url="http://92.205.61.147:8080";
  constructor(private http: HttpClient) { }


  getDetails(): Observable<any> {
    return this.http.get(
        this.url + "/getUser/"+localStorage.getItem("id"));
  }

  updateprofile(profile:any): Observable<any> {
    return this.http.post(
        this.url + "/updateProfile",profile);
  }
  addKyc(image:any): Observable<any> {
    let kyc={id:localStorage.getItem("id"),kyc:image}
    return this.http.post(
        this.url + "/addKyc",kyc);
  }
}
