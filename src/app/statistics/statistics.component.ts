import { Component, OnInit } from "@angular/core";
import { EmployerService } from "../service/employer.service";
import { Employer } from "../models/employer.model";
import { Inventary } from "../models/inventary.model";
import { InventaryService } from "../service/inventary.service";
import { Chart } from "chart.js";

@Component({
  selector: "statistic",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  constructor(
    private employeService: EmployerService,
    private inventaryService: InventaryService
  ) {}

  chart = [];
  chartI = [];

  ngOnInit() {
    this.inventaryService.getInventaryPrice2().subscribe(res => {
      let inventary = res["data"];
      console.log(inventary["data"]);

      let inventaryDescription = inventary["data"].map(
        res => res.InventaryDescription
      );

      console.log(inventaryDescription);
      let inventaryPrice = inventary["data"].map(res => res.Price);

      this.chartI = new Chart("canvasI", {
        type: "pie",
        data: {
          labels: inventaryDescription,
          datasets: [
            {
              data: inventaryPrice,
              borderColor: [
                "#ff5c5c",
                "#5b60a3",
                "#5ab66e",
                "#51b0e3",
                "#469e81",
                "#e4699e"
              ],
              backgroundColor: [
                "#ff5c5c",
                "#5b60a3",
                "#5ab66e",
                "#51b0e3",
                "#469e81",
                "#e4699e"
              ],
              fill: false
            }
          ]
        },
        options: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              fontColor: "black"
            }
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      });
    });

    this.employeService.getEmployer2().subscribe(res => {
      let hola = res["data"];

      console.log(hola["data"]);
      let employee = hola["data"].map(res => res.EmployeeName);
      console.log(employee);
      let employeeSalary = hola["data"].map(res => res.EmployeeSalary);

      this.chart = new Chart("canvas", {
        type: "bar",
        data: {
          labels: employee,
          datasets: [
            {
              data: employeeSalary,
              borderColor: "#f50000",
              backgroundColor: [
                "#ff5c5c",
                "#5b60a3",
                "#5ab66e",
                "#51b0e3",
                "#469e81",
                "#e4699e"
              ],
              fill: false
            }
          ]
        },
        options: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              fontColor: "black"
            }
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      });
    });
  }
}
