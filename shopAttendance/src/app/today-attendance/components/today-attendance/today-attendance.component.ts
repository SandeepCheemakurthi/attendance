import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-today-attendance',
  templateUrl: './today-attendance.component.html',
  styleUrls: ['./today-attendance.component.css'],
})
export class TodayAttendanceComponent implements OnInit {
  todayDate = new Date();
  presentDate: any;
  people: any = [
    { name: 'John', checked: false },
    { name: 'Peter', checked: false },
    { name: 'Tom', checked: false },
  ];
  allSelected: boolean = false;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    console.log('date', this.todayDate);
    this.presentDate = this.datePipe.transform(this.todayDate, 'MMM d, y');
  }

  updateAll($event: any) {
    console.log('event', $event);
    console.log('people',this.people)
    console.log('all checked',this.people.every((t:any) => {t.checked}))
    this.allSelected = this.people != null && this.people.every((t:any) => {t.checked});
  }
  someChecked(){
    if (this.people == null) {
      return false;
    }
    console.log("length",this.people.filter((t:any )=>{t.checked}).length)
    return this.people.filter((t:any )=>{t.checked}).length > 0 && !this.allSelected;
  }
  setAll(checked: boolean) {
    this.allSelected = checked;
    if (this.people == null) {
      return;
    }
    this.people.forEach((person: any) => {
      person.checked = checked;
    });
  }
}
