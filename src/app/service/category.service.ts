import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Category } from "../models/category.model";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:4120/category/listCategories";

  getEmployer(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }
}
