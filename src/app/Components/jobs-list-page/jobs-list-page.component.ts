import { ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Card, JobServicesService } from 'src/app/Services/job-services.service';
import {  faLocationDot,faClock,faBriefcase,faMoneyCheckDollar,faArrowRight,faCheck	 } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { AnyObject } from 'chart.js/dist/types/basic';


@Component({
  selector: 'app-jobs-list-page',
  templateUrl: './jobs-list-page.component.html',
  styleUrls: ['./jobs-list-page.component.css']
})
export class JobsListPageComponent {
  listview:boolean = false
  gridview:boolean = true

  onclick()
  {
    this.listview = !this.listview; 
    this.gridview = !this.gridview
  }
  isShowDiv=false;
  toggleDisplaydiv()
  {
    this.isShowDiv=!this.isShowDiv;
  }
  isShowSideFilter=false;
  toggleSideFilter()
  {
    this.isShowSideFilter=!this.isShowSideFilter;
  }
  panelOpenState = false;
  faLocation=faLocationDot;
  faClock=faClock;
  faBriefcase	=faBriefcase	;
  faMoneyCheckDollar=faMoneyCheckDollar;
  faArrowRight=faArrowRight;
  faCheck=faCheck;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChildren("type") type!: QueryList<ElementRef>;

  jobitems:Array<any>=new Array();
  dataSource: MatTableDataSource<any> = new MatTableDataSource<AnyObject>();
  obs!: Observable<any>;
  arrays!:any[];
  array!: any[][];
  array1!: any[][];
  array2!: any[][];
  array3!: any[][];
  array4!: any[][];

  filterValues: any = {};
  constructor(private jobService:JobServicesService,private changeDetectorRef: ChangeDetectorRef){
    this.jobitems=this.jobService.getData();
  } 


  ngOnInit() {
   this.dataSource=new MatTableDataSource<Card>(this.jobitems);
 
   this.dataSource.filterPredicate = ((data: Card, filter: string): boolean => {
    const filterValues = JSON.parse(filter);
    let conditions = true;

    for (let filterKey in filterValues) {
      if (filterKey === 'CompanyName') {
        conditions = conditions && data[filterKey].trim().toLowerCase().indexOf(filterValues[filterKey]) !== -1;
      }
      else if (filterValues[filterKey].length) {
        conditions = conditions && filterValues[filterKey].includes(data[filterKey].trim().toLowerCase());
      }
    }

    return conditions;
  });
    this.changeDetectorRef.detectChanges(); 
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    this.array = this.groupByNokey(this.jobitems, 'category');
    this.array1 = this.groupByNokey(this.jobitems, 'type');
    this.array2 = this.groupByNokey(this.jobitems, 'location');
    this.array3 = this.groupByNokey(this.jobitems, 'price');
    this.array4 = this.groupByNokey(this.jobitems, 'time');
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter1() {
    this.dataSource.filter = JSON.stringify(this.filterValues);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateFilter(column: string, filter: string) {
    if (!this.filterValues.hasOwnProperty(column)) {
      this.filterValues[column] = [filter];
    } else {
      this.filterValues[column].includes(filter) ?
        this.filterValues[column] = this.filterValues[column].filter((filterValue: string) => filterValue !== filter) :
        this.filterValues[column].push(filter);
    }

    this.applyFilter1();
  }
  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
groupByNokey(collection: string | any[], property: string) {
    var i = 0,
      val,
      index,
      values = [],
      result = [];
    for (; i < collection.length; i++) {
      val = collection[i][property];
      index = values.indexOf(val);
      if (index > -1) result[index].push(collection[i]);
      else {
        values.push(val);
        result.push([collection[i]]);
      }
    }
    return result;
  }


}
