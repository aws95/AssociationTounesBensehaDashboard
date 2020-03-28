import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder , FormGroup, FormControl } from "@angular/forms";
import { AngularFireDatabase } from '@angular/fire/database';
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent implements OnInit {
  volForm: FormGroup;
  model: any;

  constructor( public router: Router,
    private fb: FormBuilder,
    private http: HttpClient, 
    private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.volForm = this.fb.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      cin: new FormControl(),
      adress: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
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


  submitVol() {
    this.model = JSON.stringify({
       volInfo: this.volForm
     }, this.getCircularReplacer()); this.http
       .post("https://ahna-likom-50303.firebaseio.com/vol" + ".json", this.model)
       .subscribe(res => console.log(res));
     Swal.fire({
       title: "Merci",
     });
     this.router.navigate(["/home/resources"]);
    console.log(this.volForm.value);
  }

}
