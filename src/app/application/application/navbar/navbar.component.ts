import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/authentication/services/tokenStorage/token-storage.service';
import { WalletService } from '../services/wallet/wallet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   dorpdownClicked:boolean=false;
   listCrypto:any=[];
   user:any;

  constructor(private tokenStorage:TokenStorageService,private router:Router,private service:WalletService) { }

  ngOnInit(): void {
    this.getDetails();
  }
  toogle(){
  this.dorpdownClicked=!this.dorpdownClicked;
}

@HostListener("click", ["$event"])
    public onClick(event: any): void
    {
        event.stopPropagation();
    }

    logout(){
      this.tokenStorage.signOut();
      this.router.navigate(['']);
    }

    getDetails(){
      this.service.getDetails().subscribe((data)=>{
        console.log("data",data)
       this.user=data.user;
       console.log(this.user);
      },(error)=>{
        console.log("error",error);
          })
    }
}
