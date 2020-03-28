import { DataService } from "./services/data.service";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from "firebase";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSecComponent } from './components/add-sec/add-sec.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { AddVolComponent } from './components/add-vol/add-vol.component';
import { AddDonationComponent } from './components/add-donation/add-donation.component';
import { DistComponent } from './components/dist/dist.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
firebase.initializeApp(environment.firebase);
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDistComponent } from './components/view-dist/view-dist.component';
import { AuthService } from "./services/auth.service";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ViewDonationsComponent } from './components/view-donations/view-donations.component';
import { ViewViolationsComponent } from './components/view-violations/view-violations.component';



@NgModule({
  declarations: [
    AppComponent,
    AddSecComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ResourcesComponent,
    AddVolComponent,
    AddDonationComponent,
    DistComponent,
    GestionComponent,
    ViewDistComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ViewDonationsComponent,
    ViewViolationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, "ahna-likom-45323"),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,RouterModule
  ],
  providers: [AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
