import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Components/footer/footer.component';
import { JobCardComponent } from './Components/job-card/job-card.component';
import { JobsListComponent } from './Components/jobs-list/jobs-list.component';
import { JobsListPageComponent } from './Components/jobs-list-page/jobs-list-page.component';
import { OverviewComponent } from './Components/Condidate-Dashboard/overview/overview.component';
import { FindJobComponent } from './Components/Condidate-Dashboard/find-job/find-job.component';
import { MyJobsComponent } from './Components/Condidate-Dashboard/my-jobs/my-jobs.component';
import { MyProfileComponent } from './Components/Condidate-Dashboard/my-profile/my-profile.component';
import { SettingsComponent } from './Components/Condidate-Dashboard/settings/settings.component';
import { CompanyDashboardComponent } from './Views/company-dashboard/company-dashboard.component';
import { CondidateDashboardComponent } from './Views/condidate-dashboard/condidate-dashboard.component';
import { FavouritesComponent } from './Components/Condidate-Dashboard/favourites/favourites.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table'  
import { MatCard, MatCardModule, } from '@angular/material/card'; 
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { MatAutocomplete } from '@angular/material/autocomplete';
import { JobDetailsComponent } from './Components/Condidate-Dashboard/job-details/job-details.component';
import { EarningComponent } from './Components/Condidate-Dashboard/earning/earning.component';
import { SkillsModalComponent } from './Components/Condidate-Dashboard/skills-modal/skills-modal.component';
import { SearchPipe } from './Components/Pipes/search.pipe';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { JobsfilterComponent } from './Components/Condidate-Dashboard/jobsfilter/jobsfilter.component';
import {CdkTableModule} from '@angular/cdk/table';
import { CalendarCarouselComponent } from './Components/Condidate-Dashboard/calendar-carousel/calendar-carousel.component';
import { JobfilterPipe } from './Components/jobfilter.pipe';
import { RegisterComponent } from './Components/register/register.component';
import { RegisterbasicsComponent } from './Components/registerbasics/registerbasics.component';
import { InformationsRegisterComponent } from './Components/informations-register/informations-register.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    JobCardComponent,
    JobsListComponent,
    JobsListPageComponent,
    OverviewComponent,
    FindJobComponent,
    MyJobsComponent,
    MyProfileComponent,
    SettingsComponent,
    CompanyDashboardComponent,
    CondidateDashboardComponent,
    FavouritesComponent,
    JobDetailsComponent,
    EarningComponent,
    SkillsModalComponent,
    SearchPipe,
    CarouselComponent,
    JobsfilterComponent,
    CalendarCarouselComponent,
    JobfilterPipe,
    RegisterComponent,
    RegisterbasicsComponent,
    InformationsRegisterComponent,
    ForgotpasswordComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FontAwesomeModule,
    FormsModule,ReactiveFormsModule,
    MatIconModule,MatCardModule, MatChipsModule,MatAutocompleteModule,
    MatSidenavModule ,MatTabsModule,
    MatToolbarModule,    MatGridListModule,
    MatListModule,MatPaginatorModule,MatTableModule,    CdkTableModule,

    MatButtonModule,MatExpansionModule,CdkAccordionModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
