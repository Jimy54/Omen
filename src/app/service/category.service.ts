import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Category } from "../models/category.model";
import { SendToken } from "./SendToken.service";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient, private token: SendToken) {}

  url = "http://localhost:4120/category/listCategories";

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
