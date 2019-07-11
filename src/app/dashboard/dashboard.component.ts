import { Component, OnInit } from '@angular/core';
import {Chart, ChartOptions, ChartType} from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
                }
            }],
            xAxes: [{
              type: 'time',
              time: {
                  unit: 'minute'
              }
          }]
        }
    };

  public chartType: ChartType = 'line';
  public legend = true;
  public data = [{
    label: '# of Votes',
    data: [{
      x: new Date('2019-04-05T20:39:35.000'),
      y: 1
  },
  {
    x: new Date('2019-05-06T20:39:35.000'),
    y: 1
}],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
}];

  constructor() { }

  ngOnInit() {
    // let navlink = document.getElementById('history-link');
    // console.log(navlink.className);
    // navlink.className += " active";
  }

}
