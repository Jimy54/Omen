import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Employer } from "../models/employer.model";

@Injectable()
export class EmployerService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:4120/employee/listEmployees";

  getEmployer(): Observable<Employer[]> {
    return this.http.get<Employer[]>(this.url);
  }
}
