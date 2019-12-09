import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {
   //public pieChartLabels=['sales 01','sale 02'];
   public pieChartData=[100,20];
   public pieCharType='pie';

  constructor() { }
    
  ngOnInit() {
    
                  

  }

}
