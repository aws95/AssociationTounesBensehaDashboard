import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from "../../services/data.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-donations',
  templateUrl: './view-donations.component.html',
  styleUrls: ['./view-donations.component.css']
})
export class ViewDonationsComponent implements OnInit {
  IssuesList: any;
  payload: any;
  buttonValue: any;
  key: string;

  constructor(private DonationApi: DataService, public ngZone: NgZone,  private http: HttpClient,) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    return this.DonationApi.GetDonations().subscribe((data: {}) => {
      this.IssuesList = data;
      this.payload = Object.values(this.IssuesList);
      console.log(this.payload);
      //console.log(typeof this.payload);
    });
  }
  toggle(index) {
    this.buttonValue = index;
    this.key = Object.keys(this.IssuesList)[this.buttonValue];
    console.log(this.buttonValue);
    console.log(this.key);

    return this.http.delete(
      "https://ahna-likom-50303.firebaseio.com" + '/donations/' + this.key + ".json"
    ).subscribe((data) => {
      console.log("success");
      this.loadData();
    });
  }

}
