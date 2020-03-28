import { Injectable } from "@angular/core";
import { AngularFireDatabase,AngularFireList, AngularFireObject } from "@angular/fire/database";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DataService {
  private REST_API_SERVER = "https://ahna-likom-50303.firebaseio.com/donations";
  private REST_API_SERVER_Dist = "https://ahna-likom-50303.firebaseio.com/distribution";
  private REST_API_SERVER_Families = "https://ahna-likom-50303.firebaseio.com/families";
  private REST_API_SERVER_Vol = "https://ahna-likom-50303.firebaseio.com/vol";
  private REST_API_SERVER_Violations = "https://ahna-likom-50303.firebaseio.com/violations";
  datasRef: AngularFireList<any>;
  dataRef: AngularFireObject<any>;
  ind : any;
  info : any;
  constructor(private httpClient: HttpClient,private db: AngularFireDatabase) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "Data/json"
    })
  };
  quizs: Observable<any>;
  scores: Observable<any>;
  GetDonation(id: string) {
    return this.httpClient.get(
      this.REST_API_SERVER + ".json" + id,
    );
  }
  GetDonations() {
    const params = new HttpParams().set("donationId", "1");
    return this.httpClient.get(
      this.REST_API_SERVER + ".json",
    );
  }
  GetFamily(id: string) {
    return this.httpClient.get(
      this.REST_API_SERVER_Families + ".json" + id,
    );
  }
  GetFamilies() {
    const params = new HttpParams().set("familyId", "1");
    return this.httpClient.get(
      this.REST_API_SERVER_Families + ".json",
    );
  }
  GetVol(id: string) {
    return this.httpClient.get(
      this.REST_API_SERVER_Vol + ".json" + id,
    );
  }
  GetVols() {
    const params = new HttpParams().set("volId", "1");
    return this.httpClient.get(
      this.REST_API_SERVER_Vol + ".json",
    );
  }
  GetDist(id: string) {
    return this.httpClient.get(
      this.REST_API_SERVER_Dist + ".json" + id,
    );
  }
  GetDists() {
    const params = new HttpParams().set("distId", "1");
    return this.httpClient.get(
      this.REST_API_SERVER_Dist + ".json",
    );
  }
  GetViolation(id: string) {
    return this.httpClient.get(
      this.REST_API_SERVER_Violations + ".json" + id,
    );
  }
  GetViolations() {
    const params = new HttpParams().set("violationId", "1");
    return this.httpClient.get(
      this.REST_API_SERVER_Violations + ".json",
    );
  }
  getInd() {
    return this.info;
  }
  setInd(value) {
    this.info = value;
  }
}
