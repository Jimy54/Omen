import { Component, OnInit } from '@angular/core';
import { BranchOffice } from '../models/branchOffice.model';
import { BranchOfficeService } from '../service/branch-office.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-branch-office-edit',
  templateUrl: './branch-office-edit.component.html',
  styleUrls: ['./branch-office-edit.component.css']
})
export class BranchOfficeEditComponent implements OnInit {

  constructor(private branchOfficeService:BranchOfficeService,private httpCliente:HttpClient) { }
  private url: string = "http://localhost:4120/branchOffice";
  BranchOfficeID;
  BranchOfficeName;
  BranchOfficePhone;
  BranchOfficeAddress;
  BusinessID;
  _postArray: BranchOffice
  ngOnInit() {
  }

  updateBranchOffice(){

  }


  getBranchOffice() {
    this.branchOfficeService
      .getBranchOffice()
      .subscribe(
        resultArray => this._postArray,
        error => console.log("Error " + error)
      );
  }

}
