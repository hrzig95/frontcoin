import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { HistoryComponent } from './history/history.component';
import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { NftComponent } from './nft/nft.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KycComponent } from './kyc/kyc.component';
import { NgFileDragDropModule } from 'ng-file-drag-drop';


@NgModule({
  declarations: [
    WalletComponent,
    HistoryComponent,
    ApplicationComponent,
    NavbarComponent,
    ProfileComponent,
    NftComponent,
    KycComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFileDragDropModule
  ]
})
export class ApplicationModule { }
