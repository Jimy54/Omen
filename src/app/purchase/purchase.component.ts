import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']

})

export class PurchaseComponent implements OnInit{
  public i:number  = 0;
  public des:boolean = true;
  constructor(){}


  ngOnInit(){}

  addInput(){
    this.i = this.i + 1;

    var table = document.getElementById("dataTable");
    var tr = document.getElementById("trA");
    var tr2 = document.getElementById("trA2");
    var tr3 = document.getElementById("trA3");
    var tr4 = document.getElementById("trA4");

    var elementInput1 = document.createElement("input");
    var elementSelect = document.createElement("select");
    var elementInput2 = document.createElement("input");
    var elementInput3 = document.createElement("input");
    var elementBr = document.createElement("br");
    var elementBr2 = document.createElement("br");
    var elementBr3= document.createElement("br");
    var elementBr4 = document.createElement("br");



    elementInput1.className = "inputs";
    elementInput1.setAttribute("size", "50");
    elementInput1.setAttribute("name", "inputss");

    console.log(this.i);
    tr.appendChild(elementInput1);
    tr2.appendChild(elementSelect);
    tr3.appendChild(elementInput2);
    tr4.appendChild(elementInput3);
    tr.appendChild(elementBr);
    tr2.appendChild(elementBr2);
    tr3.appendChild(elementBr3);
    tr4.appendChild(elementBr4);

  }




}
