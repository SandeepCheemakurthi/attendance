import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayAttendanceComponent } from './components/today-attendance/today-attendance.component';

const routes: Routes = [{
  path:'todayAttendance',
  component:TodayAttendanceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodayAttendanceRoutingModule { }
