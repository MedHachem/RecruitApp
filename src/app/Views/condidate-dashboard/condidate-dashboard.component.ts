import { Component } from '@angular/core';

@Component({
  selector: 'app-condidate-dashboard',
  templateUrl: './condidate-dashboard.component.html',
  styleUrls: ['./condidate-dashboard.component.css']
})
export class CondidateDashboardComponent {
  screenWidth: number;
  constructor() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }
  panelOpenState = false;
}
