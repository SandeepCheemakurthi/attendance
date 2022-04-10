import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TodayAttendanceRoutingModule } from './today-attendance-routing.module';
import { TodayAttendanceComponent } from './components/today-attendance/today-attendance.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    TodayAttendanceComponent
  ],
  imports: [
    CommonModule,
    TodayAttendanceRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [DatePipe],
  exports: [TodayAttendanceComponent]
})
export class TodayAttendanceModule { }
