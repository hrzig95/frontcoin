import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WalletService } from '../services/wallet/wallet.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  formProfile: FormGroup;
  success:any;
  error:any;
  constructor(private service:WalletService) { 
    this.formProfile = new FormGroup({
      id: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(),
      picture: new FormControl(),
      country: new FormControl(),
      telephone: new FormControl(),
      address1: new FormControl(),
      address2: new FormControl(),
      birthday: new FormControl(),
      postcode: new FormControl(),
      region: new FormControl(),
    });

  }
  

  ngOnInit(): void {
    this.getDetails();
    
  }
  getDetails(){
    this.service.getDetails().subscribe((data)=>{
     this.user=data.user;
    },(error)=>{
      console.log("error",error);
        })
  }
  updateProfile() {
    // picture: new FormControl(),
      let data_profile = {
        id: this.formProfile.get("id")?.value,
        firstName: this.formProfile.get("firstName")?.value,
        lastName: this.formProfile.get("lastName")?.value,
        birthday: this.formProfile.get("birthday")?.value,
        picture: this.user.picture,
        telephone: this.formProfile.get("telephone")?.value,
        address1: this.formProfile.get("address1")?.value,
        address2: this.formProfile.get("address2")?.value,
        postcode: this.formProfile.get("postcode")?.value,
        region: this.formProfile.get("region")?.value,
        country: this.formProfile.get("country")?.value,        
      };

        this.service.updateprofile(data_profile).subscribe(
          (data: any) => {
            console.log(data);
            this.success=data.message;
            setTimeout(() => {
              this.success = false
            }, 2000)
          },
          (error:any) =>{
            console.log(error);
            this.error=error.error.message
          }
        );
  }

  onFileChange(e: any) {
   
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
         const fileKit=r.result
         this.formProfile.get('picture')?.setValue(fileKit)   
         this.user.picture=this.formProfile.get('picture')?.value
      }
    }
  }
  }
 
}
