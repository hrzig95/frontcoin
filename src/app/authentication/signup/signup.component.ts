import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm: FormGroup;
  error:any;
  success:any;
  constructor(private service:AuthService) { 
    this.authForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
  }
  signup(){
    this.service.register(this.authForm.value).subscribe((data)=>{
      console.log("data",data)
      this.success=data.message;
      setTimeout(() => {
        this.success = false
      }, 3000)
    },(error)=>{
      this.error=error.error.message;
      setTimeout(() => {
        this.error = false
      }, 3000)    })
    console.log(this.authForm.value);
  }
}
