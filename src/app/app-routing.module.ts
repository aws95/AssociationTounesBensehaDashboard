import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSecComponent } from './components/add-sec/add-sec.component';
import { AddVolComponent } from './components/add-vol/add-vol.component';
import { AddDonationComponent } from './components/add-donation/add-donation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { DistComponent } from './components/dist/dist.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ViewDistComponent } from './components/view-dist/view-dist.component';
import { AuthGuard } from "./services/guard/auth.guard";
import { SecureInnerPagesGuard } from "./services/guard/secure-inner-pages.guard";
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ViewDonationsComponent } from './components/view-donations/view-donations.component';
import { ViewViolationsComponent } from './components/view-violations/view-violations.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home', component: DashboardComponent, canActivate: [AuthGuard], children : [
      {
        path : "addsec", component : AddSecComponent
      },
      {
        path : "addvol", component : AddVolComponent
      }
      ,
      {
        path : "adddonation", component : AddDonationComponent
      },
      {
        path : "resources", component : ResourcesComponent
      },
      {
        path : "distribution", component : DistComponent
      },
      {
        path : "gestion-distribution", component : GestionComponent
      },
      {
        path : "voir-distribution", component : ViewDistComponent
      },
      {
        path : "view-donations", component : ViewDonationsComponent
      },
      {
        path : "view-violations", component : ViewViolationsComponent
      }
    ]
  
  },
  {
    path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'verify-email', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
