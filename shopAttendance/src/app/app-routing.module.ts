import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
import { SignupComponent } from './core/components/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component: SignupComponent
  },
  {
    path:'todayAttendance',
    loadChildren:() => import('./today-attendance/today-attendance.module').then((m)=>m.TodayAttendanceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
