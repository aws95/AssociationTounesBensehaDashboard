import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from "../../services/data.service";
@Component({
  selector: 'app-dist',
  templateUrl: './dist.component.html',
  styleUrls: ['./dist.component.css']
})
export class DistComponent implements OnInit {
  IssuesList: any = [];
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
  buttonValue : any;

  constructor(private DonationApi: DataService, public ngZone: NgZone ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    return this.DonationApi.GetFamilies().subscribe((data: {}) => {
      this.IssuesList = data;
      this.payload = Object.values(this.IssuesList);
      console.log(this.payload);
      //console.log(typeof this.payload);
    });

  }
  toggle(index) {
    this.buttonValue = index;
    console.log(this.buttonValue);
    let ind = this.DonationApi.setInd(
      this.buttonValue
    );
  }
}
