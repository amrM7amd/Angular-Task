import { Component } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  single: any[];

  colorSet: string = 'vivid';

  chartTypes: Object[] = [
    {id: 1, type: 'bar-vertical'},
    {id: 2, type: 'bar-horizontal'},
    {id: 3, type: 'pie-chart'},
    {id: 4, type: 'advanced-pie-chart'},
    {id: 5, type: 'pie-grid'},
    {id: 6, type: 'gauge'}
  ];

  view: any[] = [400, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  explodeSlices = false;
  doughnut = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  selection: string = this.chartTypes[0]['type'];

  constructor() {Object.assign(this, { single })}

  select(chart) {
    this.selection = chart.type;
    console.log(this.selection + " " + chart.type);
  }

  onSelect(event) {
    console.log(event);
  }
  
}
