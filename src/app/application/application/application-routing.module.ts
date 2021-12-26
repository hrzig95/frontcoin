import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { NftComponent } from './nft/nft.component';

const routes: Routes = [
  {
    path: "wallet",
    component: WalletComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "nft",
    component: NftComponent
  },
  {
    path: "history",
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
