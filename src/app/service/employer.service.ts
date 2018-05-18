import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Employer } from "../models/employer.model";
import { SendToken } from "./SendToken.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class EmployerService {
  constructor(private http: HttpClient, private token: SendToken) {}

  url = "http://localhost:4120/employee/listEmployees";

  getEmployer(): Observable<Employer[]> {
    return this.http.get<Employer[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
  

}
