import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet/wallet.service';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit {
  dragDropConfig = {
    showList:true,
    showProgress:true
  }
  kyc:any;
  status:any;
  existKyc:any=false;
  success:any;
  constructor(private service:WalletService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getUploadedFiles(e:any) {
    if (
      e.target.files[0].type == "image/png" ||
      e.target.files[0].type == "image/jpeg" ||
      e.target.files[0].type == "image/jpg" 
    ) {
  
      var file = e.target.files[0];
      var r = new FileReader();
      if (e.target.files[0]) {
        r.readAsDataURL(file);
        r.onload = () => {
          let selectedFile = r.result;
          let selectedFilename = file.name;
         const fileKit=r.result;
         this.kyc=fileKit;
         this.status="pending";
        //  this.formProfile.get('picture')?.setValue(fileKit)   
        //  this.user.picture=this.formProfile.get('picture')?.value
      }
    }
  }

  }

  upload(){
    this.service.addKyc(this.kyc).subscribe((data:any)=>{
      this.existKyc=true;
      this.success=data.message;
      setTimeout(() => {
        this.success = false
      }, 2000)    },(error:any)=>{
      console.log(error)
    })
    console.log(this.kyc)
  }

  getDetails(){
    this.service.getDetails().subscribe((data)=>{
      if(data.user.kyc)
      this.existKyc=true;
     this.kyc=data.user.kyc.image;
     this.status=data.user.kyc.status
    },(error)=>{
      console.log("error",error);
        })
  }
}
