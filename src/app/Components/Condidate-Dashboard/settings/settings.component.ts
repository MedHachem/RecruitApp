import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
export interface Certif {
  name: string;
}
export interface Skill {
  name: string;
}
export interface Lang {
  name: string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
 


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  educationlist : any[]=[];

  onclick(prouser: { value: string | any[]; }){
    if(prouser.value.length > 0)
    {
      this.educationlist.push(prouser.value);
      prouser.value = '';
    }
    
  }

  ondelete(deleteme: number){
    this.educationlist.splice(deleteme,1)
  }

  certif: Certif[] = [
    
  ];
  skills: Skill[] = [
    
  ];
  language: Lang[] = [
    
  ];

  addCertif(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our certif
    if ((value || '').trim()) {
      this.certif.push({name: value.trim()});
    }
   
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeCertif(certif: Certif): void {
    const index = this.certif.indexOf(certif);

    if (index >= 0) {
      this.certif.splice(index, 1);
    }
  }
  addSkills(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our certif
    if ((value || '').trim()) {
      this.skills.push({name: value.trim()});
    }
   
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  removeSkills(skills: Skill): void {
    const index = this.skills.indexOf(skills);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }
  addLang(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our certif
    if ((value || '').trim()) {
      this.language.push({name: value.trim()});
    }
   
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  removeLang(language: Lang): void {
    const index = this.language.indexOf(language);

    if (index >= 0) {
      this.language.splice(index, 1);
    }
  }



}
