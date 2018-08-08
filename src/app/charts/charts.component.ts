import { Component, OnInit, Input } from '@angular/core';
import { colorSets } from '../charts-colors';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() currentChart;
  @Input() data;
  @Input() name;

  view: any[] = [600, 300];

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

  colorScheme;

  constructor() {
    Object.assign(this, this.data)
  }

  ngOnInit() {
    this.colorScheme = {domain: colorSets.filter(schema => {
      return schema['name'] == 'cool';
    })[0]['domain'] };
  }

}
