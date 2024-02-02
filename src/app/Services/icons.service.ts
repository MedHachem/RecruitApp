import { Injectable } from '@angular/core';
import {  faLocationDot,faClock,faBriefcase,faMoneyCheckDollar,faArrowRight,faCheck	 } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  faLocation=faLocationDot;
  faClock=faClock;
  faBriefcase	=faBriefcase	;
  faMoneyCheckDollar=faMoneyCheckDollar;
  faArrowRight=faArrowRight;
  faCheck=faCheck;
   
  icons = [
    { 
      faClock,
      faBriefcase,
      faMoneyCheckDollar,
      faArrowRight,
      faCheck,}
   

  ];
  constructor() { }
  geticons(){
    return (this.icons);
  }
}
