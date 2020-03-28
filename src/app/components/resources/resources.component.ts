import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { NgZone } from "@angular/core";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  IssuesList: any = [];
  violationsDtata: any = [];
  violationsPayload: any;
  violationsList: any = [];
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
  monopole: any;
  price: any;
  vente: any;
  quar: any;
  constructor(private DonationApi: DataService, public ngZone: NgZone) { }

  ngOnInit(): void {
    this.loadData();
    this.loadViolations();

  }

  loadData() {
    return this.DonationApi.GetDonations().subscribe((data: {}) => {
      this.IssuesList = data;
      this.payload = Object.values(this.IssuesList);
      //console.log(this.payload);
      //console.log(typeof this.payload);
      this.food = 0;
      this.meds = 0;
      this.hyg = 0;
      this.prot = 0;
      for (let i = 0; i < Object.values(this.payload).length; i++) {
        //console.log(this.payload[i]["donationData"]["controls"]["donation"]["value"]);
        if ((this.payload[i]["donationData"]["controls"]["donation"]["value"]) == "food") {
          this.food = this.food + 1;
        }
        else if ((this.payload[i]["donationData"]["controls"]["donation"]["value"]) == "meds") {
          this.meds = this.meds + 1;
        }
        else if ((this.payload[i]["donationData"]["controls"]["donation"]["value"]) == "hyg") {
          this.hyg = this.hyg + 1;
        }
        if ((this.payload[i]["donationData"]["controls"]["donation"]["value"]) == "prot") {
          this.prot = this.prot + 1;
        }

      }
    });

  }
  loadViolations() {
    return this.DonationApi.GetViolations().subscribe((vio: {}) => {
      this.violationsList = vio;
      this.violationsPayload = Object.values(this.violationsList);
      console.log(this.violationsPayload);
      //console.log(typeof this.payload);
      this.monopole = 0;
      this.price = 0;
      this.vente = 0;
      this.quar = 0;
      for (let i = 0; i < Object.values(this.violationsPayload).length; i++) {
        //console.log(this.violationsPayload[i]["donationData"]["controls"]["donation"]["value"]);
        if ((this.violationsPayload[i]["violationData"]["controls"]["violation"]["value"]) == "Monopolistes") {
          this.monopole = this.monopole + 1;
        }
        else if ((this.violationsPayload[i]["violationData"]["controls"]["violation"]["value"]) == "Augmentation des prix") {
          this.price = this.price + 1;
        }
        else if ((this.violationsPayload[i]["violationData"]["controls"]["violation"]["value"]) == "Vente conditionnelle") {
          this.vente = this.vente + 1;
        }
        if ((this.violationsPayload[i]["violationData"]["controls"]["violation"]["value"]) == "Violation de l'auto-quarantaine") {
          this.quar = this.quar + 1;
        }
      }
    });

  }

}