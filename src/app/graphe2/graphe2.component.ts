import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe2',
  templateUrl: './graphe2.component.html',
  styleUrls: ['./graphe2.component.css']
})
export class Graphe2Component implements OnInit {

  public barCharOptions= {
    scaleShowVerticalLines:false,
    responsive:true


  }
  public barChartLabels=['2001','2002','2003','2004']
  public barChartType='bar';
  public barChartLegend='true';
  public barChartData =[
    {data:[65,59,80,42], label:'serie A'}, 
    {data:[12,74,15,21], label:'serie B'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
