import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder , FormGroup, FormControl } from "@angular/forms";
import { AngularFireDatabase } from '@angular/fire/database';
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-add-sec',
  templateUrl: './add-sec.component.html',
  styleUrls: ['./add-sec.component.css']
})
export class AddSecComponent implements OnInit {
  familyForm: FormGroup;
  model: any;

  constructor( 
    public router: Router,
    private fb: FormBuilder,
    private http: HttpClient, 
    private db: AngularFireDatabase
    ) 
    { }

  ngOnInit(): void {

    this.familyForm = this.fb.group({
      firstNameFather: new FormControl(),
      lastNameFather: new FormControl(),
      cinFather: new FormControl(),
      adresse: new FormControl(),
      ageFather: new FormControl(),
      phoneFather: new FormControl(),
      emailFather: new FormControl(),
      firstNameMother: new FormControl(),
      lastNameMother: new FormControl(),
      cinMother: new FormControl(),
      children: new FormControl(),
      ageMother: new FormControl(),
      phoneMother: new FormControl(),
      emailMother: new FormControl(),
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


  submitFamily() {
    this.model = JSON.stringify({
       familyInfo: this.familyForm
     }, this.getCircularReplacer()); this.http
       .post("https://ahna-likom-50303.firebaseio.com/families" + ".json", this.model)
       .subscribe(res => console.log(res));
     Swal.fire({
       title: "Merci",
     });
     this.router.navigate(["/home/resources"]);
    console.log(this.familyForm.value);
  }

}