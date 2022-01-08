import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsNotActiveService implements CanActivate{

  constructor(private router:Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem("access_token")) {
      return true;
    }
    else{
      this.router.navigate(['application/wallet']);
      return false;
    }
  }}