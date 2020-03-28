import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AngularFireDatabase } from '@angular/fire/database';
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
import * as firebase from 'firebase';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  IssuesList: any = [];
  tcode : string;
  volList: any = [];
  selected: number = 1;
  key: any;
  selectedVolNumber: any;
  database: any;
  selectedVolFirstName: any;
  selectedVolLastName: any;
  volDtata: any = [];
  volPayload: any;
  index: any;
  payload: any;
  food: number;
  meds: any;
  hyg: any;
  prot: any;
  fulName: any;
  email: any;
  phone: any;
  desc: any;
  type: any;
  data: any = [];
  distModel: any;

  constructor( public router: Router,private DonationApi: DataService, public ngZone: NgZone, private fb: FormBuilder,
    private http: HttpClient,
    private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.loadFamilies();
    this.loadVol();
  }

  loadFamilies() {
    return this.DonationApi.GetFamilies().subscribe((data: {}) => {
      this.IssuesList = data;
      console.log(this.IssuesList);
      this.payload = Object.values(this.IssuesList);
      //console.log(this.payload);
      //console.log(this.payload.length);
      //console.log(typeof (this.payload));
      //console.log(this.payload);
      this.index = this.DonationApi.getInd();
      //console.log(this.index);
      this.data = Object.values(this.payload)[this.index];
      this.key = Object.keys(this.IssuesList)[this.index];
      console.log(this.data);
      console.log(this.key);
    });
  }
  loadVol() {
    return this.DonationApi.GetVols().subscribe((info: {}) => {
      this.volList = info;
      this.volPayload = Object.values(this.volList);
      console.log(this.volPayload);
    });
  }
  selectOption(id: number) {
    console.log(this.selected)
    console.log(id);
    for (let index = 0; index < this.volPayload.length; index++) {
      console.log(Object.values(this.volPayload)[index]["volInfo"]["controls"]["firstName"]["value"]);
      if (Object.values(this.volPayload)[index]["volInfo"]["controls"]["firstName"]["value"] == id) {
        this.selectedVolNumber = Object.values(this.volPayload)[index]["volInfo"]["controls"]["phone"]["value"];
        this.selectedVolFirstName = Object.values(this.volPayload)[index]["volInfo"]["controls"]["firstName"]["value"];
        this.selectedVolLastName = Object.values(this.volPayload)[index]["volInfo"]["controls"]["lastName"]["value"];
      }
    }
  }
  onClick() {
    console.log(this.selectedVolNumber);
    console.log(this.selectedVolFirstName);
    console.log(this.selectedVolLastName);
    console.log(this.data);
    console.log(this.key);
    this.distModel = JSON.stringify({
      volNumber: this.selectedVolNumber,
      volFirstName: this.selectedVolFirstName,
      volLastName: this.selectedVolLastName,
      family: this.data,
      don : this.tcode
    }); this.http
      .post("https://ahna-likom-50303.firebaseio.com/distribution" + ".json", this.distModel)
      .subscribe(res => console.log(res));
    Swal.fire({
      title: "Merci",
    });
    return this.http.delete(
      "https://ahna-likom-50303.firebaseio.com" + '/families/' + this.key + ".json"
    ).subscribe((data) => {
      console.log("success");
      this.router.navigate(["/home/resources"]);
    });
  }

}

