import { Component } from '@angular/core';
import {  faLocationDot,faClock,faBriefcase,faPhone,faMailBulk,faMoneyBill,faStar,faRotate,faUserTie,faTimeline,faPen } from '@fortawesome/free-solid-svg-icons';

import Chart from 'chart.js/auto';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  faPhone=faPhone;
  faMailBulk=faMailBulk;
  faLocationDot=faLocationDot;
  faClock=faClock;
  faBriefcase=faBriefcase;
  faMoneyBill=faMoneyBill;
  faStar=faStar;
  faRotate=faRotate;
  faUserTie=faUserTie;
  faTimeline=faTimeline;
  faPen=faPen;
  

  public chart: any;








  columnChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Angular Column Chart in Material UI Tabs',
    },
    data: [
    {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: 'column',
        dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
        ],
    },
    ],
};

pieChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Angular Pie Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
    {
        type: 'pie',
        dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
        ],
    },
    ],
};

lineChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Angular Line Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
    {
        type: 'line',
        dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
        ],
    },
    ],
};
 

  
  createBarChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Jobs",
            data: [1,1, 45],
            backgroundColor: '#bae6fd'
          
          },
          {
            label: "Earns",
            data: [90,80,70],
            backgroundColor: '#93c5fd'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  createPieChart(){
  
    this.chart = new Chart("PieChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ["completed", "Uncompleted", "Disabled","finished"],
	       datasets: [
          {
            label: "Jobs accomplished stats",
            data: [300, 10, 100,50],
            backgroundColor: [
              "#6ee7b7",
              "#818cf8","#a8a29e",
              "#fb7185",]
          
          },
         
        ]
      },
      
      
    });
  }

  ngOnInit(): void {
    this.createBarChart();
    this.createPieChart();
  }
  constructor() {};
 
  
}
