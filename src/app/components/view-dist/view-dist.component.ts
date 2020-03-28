import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-view-dist',
  templateUrl: './view-dist.component.html',
  styleUrls: ['./view-dist.component.css']
})
export class ViewDistComponent implements OnInit {
  distList: {};
  distPayload: unknown[];

  constructor(private DonationApi: DataService,public ngZone: NgZone) { }

  ngOnInit(): void {
    this.loadDist();
  }

  loadDist() {
    return this.DonationApi.GetDists().subscribe((info: {}) => {
      this.distList = info;
      this.distPayload = Object.values(this.distList);
      console.log(this.distPayload);
    });
  }
}
