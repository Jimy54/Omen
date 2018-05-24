import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BranchOfficeInventary } from "../models/branchOfficeInventary.model";
import { SendToken } from "./SendToken.service";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth-service.service";

@Injectable()
export class BranchOfficeInventaryService {
  identity_id;
  url;
  constructor(
    private token: SendToken,
    private http: HttpClient,
    private userService: AuthService
  ) {
    this.identity_id = userService.getIdentity();
    this.url =
      "http://localhost:4120/branchOfficeInventary/listBranchOfficeInventary/" +
      this.identity_id.businessID;
  }

  getBranchOfficeInventary(): Observable<BranchOfficeInventary[]> {
    return this.http.get<BranchOfficeInventary[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
