import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, FormControl } from "@angular/forms";
import { AngularFireDatabase } from '@angular/fire/database';
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent implements OnInit {
  model: any;
  donationForm: FormGroup;
  get: any;


  constructor( 
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.donationForm = this.fb.group({
      donation: new FormControl(),
      fullName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      adress: new FormControl(),
      desc: new FormControl(),
    })

  }
  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };


  submitDonation() {
    this.model = JSON.stringify({
       donationData: this.donationForm
     }, this.getCircularReplacer()); this.http
       .post("https://ahna-likom-50303.firebaseio.com/donations" + ".json", this.model)
       .subscribe(res => console.log(res));
     Swal.fire({
       title: "Merci pour votre Générosité",
     });
     this.router.navigate(["/home/resources"]);
    console.log(this.donationForm.value);
  }
}
