import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application/application.component';
import { HistoryComponent } from './application/application/history/history.component';
import { WalletComponent } from './application/application/wallet/wallet.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';

const routes: Routes = [
  {
    path: "",
    component: SigninComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then((m) => m.AuthenticationModule),
      //canActivateChild: 
  },
  {
    path: "signup",
    component: SignupComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then((m) => m.AuthenticationModule),
      //canActivateChild: 
  },
  {
    path: "application",
    component: ApplicationComponent,
    loadChildren: () =>
      import("./application/application/application.module").then((m) => m.ApplicationModule),
      //canActivateChild: 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
