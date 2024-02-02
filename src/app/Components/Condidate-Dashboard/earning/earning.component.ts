import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { JobServicesService } from 'src/app/Services/job-services.service';

@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.css']
})
export class EarningComponent implements OnInit {
  lineChart:any = {
    type: 'bar',
    
   data: {
       labels: ['January', 'Febrary', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
       datasets: [{
           label: 'My Earnings',
           data: [12, 19, 3, 5, 2, 3,30,12,32,24,5,12],
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
           borderWidth: 3
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero: true
               }
           }]
       }
   }
 };
 ngOnInit(){
  new Chart('lineChart',this.lineChart)
}
jobitems:Array<any>=new Array();
constructor(private jobService:JobServicesService){
    this.jobitems=jobService.getData();
  }

}
