import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-mini-calendar',
  standalone: true,
  imports: [NzDatePickerModule,NzCalendarModule, CommonModule, FormsModule],
  templateUrl: './mini-calendar.component.html',
  styleUrl: './mini-calendar.component.less',
  encapsulation: ViewEncapsulation.None
})
export class MiniCalendarComponent {
  @Input() year: number = new Date().getFullYear()
  @Input() month: number = 1;
  date: Date = new Date;

  constructor() {
    this.updateDate();
  }

  disableOtherMonths = (current : Date): boolean => {
    return current.getMonth()!==this.month-1
  }

  updateDate(): void {
    const year = new Date().getFullYear(); // 현재 연도
    this.date = new Date(year, this.month - 1, 1); // 해당 달의 첫째 날
  }

  ngOnChanges(): void {
    this.updateDate();
  }

  getMonthName(): string {
    return this.month + '월';
  }
}
