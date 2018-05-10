import { Injectable } from "@angular/core";
import { BusinessComponent } from "../business/business.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Business } from "../models/bussiness.model";

@Injectable()
export class BusinessService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:4120/business/listBusiness";

  getEmployer(): Observable<Business[]> {
    return this.http.get<Business[]>(this.url);
  }
}
