import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Card, JobServicesService } from 'src/app/Services/job-services.service';
import {  faLocationDot,faClock,faBriefcase,faMoneyCheckDollar,faArrowRight,faCheck	 } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { AnyObject } from 'chart.js/dist/types/basic';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  faLocation=faLocationDot;
  faClock=faClock;
  faBriefcase	=faBriefcase	;
  faMoneyCheckDollar=faMoneyCheckDollar;
  faArrowRight=faArrowRight;
  faCheck=faCheck;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  jobitems:Array<any>=new Array();
  dataSource: MatTableDataSource<any> = new MatTableDataSource<AnyObject>();
  obs!: Observable<any>;

  constructor(private jobService:JobServicesService,private changeDetectorRef: ChangeDetectorRef){
    this.jobitems=jobService.getData();
    this.dataSource=new MatTableDataSource<Card>(this.jobitems);
  }
  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
}
