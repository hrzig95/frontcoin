import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url="http://127.0.0.1:8080";
  constructor(private http: HttpClient) { }


  register(
    user: any,
    //*** */
  ): Observable<any> {
    return this.http.post(
        this.url + "/signup",
      {
        email: user.email,
        password: user.password,
      }
  );
  }

  signin(
    user: any,
  ): Observable<any> {
    return this.http.post(
        this.url + "/signin",
      {
        email: user.email,
        password: user.password,
      }
  );
  }
}
