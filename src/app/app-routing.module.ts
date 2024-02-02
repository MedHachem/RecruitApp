import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarningComponent } from './Components/Condidate-Dashboard/earning/earning.component';
import { FavouritesComponent } from './Components/Condidate-Dashboard/favourites/favourites.component';
import { FindJobComponent } from './Components/Condidate-Dashboard/find-job/find-job.component';
import { JobDetailsComponent } from './Components/Condidate-Dashboard/job-details/job-details.component';
import { MyJobsComponent } from './Components/Condidate-Dashboard/my-jobs/my-jobs.component';
import { MyProfileComponent } from './Components/Condidate-Dashboard/my-profile/my-profile.component';
import { OverviewComponent } from './Components/Condidate-Dashboard/overview/overview.component';
import { SettingsComponent } from './Components/Condidate-Dashboard/settings/settings.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { InformationsRegisterComponent } from './Components/informations-register/informations-register.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { RegisterbasicsComponent } from './Components/registerbasics/registerbasics.component';
import { CondidateDashboardComponent } from './Views/condidate-dashboard/condidate-dashboard.component';
const routes: Routes = [
  {path:'Register',component:RegisterComponent,
  children: [
    {path:'',component:RegisterbasicsComponent,},
    {path:'Informations',component:InformationsRegisterComponent,},
  ]

},
{path:'ForgotPassword',component:ForgotpasswordComponent,},
{path:'Login',component:LoginComponent,},

  {path:'Dashboard',component:CondidateDashboardComponent,
   children: [
    {path:'Overview',component:OverviewComponent,},
    {path:'Favourites',component:FavouritesComponent,},
    {path:'FindJob',component:FindJobComponent,},
    {path:'MyJobs',component:MyJobsComponent,},
    {path:'MyProfile',component:MyProfileComponent,},
    {path:'JobDetails',component:JobDetailsComponent},
    {path:'Settings',component:SettingsComponent,
  },
    {path:'Earnings',component:EarningComponent,}

  ],
} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
