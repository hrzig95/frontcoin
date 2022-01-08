import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  listCrypto:any=[];
  balanceMnmDollars:any;
  quantiteMnm:any;
  constructor(private service:WalletService) { }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails(){
    this.service.getDetails().subscribe((data)=>{
     this.listCrypto=data.user.crypto
     this.listCrypto.forEach((crypto:any) => {
      if(crypto.name==="mnm")
      {
        this.balanceMnmDollars=(crypto.quantite * 0.0003).toFixed(8);
        this.quantiteMnm=crypto.quantite
      }       
     });
     console.log(this.listCrypto);
    },(error)=>{
      console.log("error",error);
        })
  }
}
