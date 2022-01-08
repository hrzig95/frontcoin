import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { TokenStorageService } from '../services/tokenStorage/token-storage.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  authForm: FormGroup;
  error:any;
  success:any;
  constructor(private service:AuthService,private tokenService:TokenStorageService,private router: Router) { 
    this.authForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
    });
  }


  ngOnInit(): void {
  }
  signin(){
    this.service.signin(this.authForm.value).subscribe((data)=>{
      this.tokenService.saveToken(data.accessToken);
      this.tokenService.saveEmail(data.email);
      this.tokenService.saveId(data.id);
      this.router.navigate(['application/wallet']);
      setTimeout(() => {
        this.success = false
      }, 3000)
    },(error)=>{
      console.log("error",error);
      this.error=error.error.message;
      setTimeout(() => {
        this.error = false
      }, 3000)    })
  }
}
