import { Injectable } from '@angular/core';
const TOKEN_KEY = "access_token";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    //localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveEmail(email: string): void {
    //localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem("email", email);
  }
  public getEmail() {
    return localStorage.getItem("email");
  }

  public saveId(id: string): void {
    //localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem("id", id);
  }
  public getId() {
    return localStorage.getItem("id");
  }
}
