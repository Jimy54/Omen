import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { BranchOffice } from "../models/branchOffice.model";

@Injectable()
export class BranchOfficeService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:4120/branchOffice/listBranchOffices";

  getBranchOffice(): Observable<BranchOffice[]> {
    return this.http.get<BranchOffice[]>(this.url);
  }
}
