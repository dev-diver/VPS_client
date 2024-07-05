import { Component, Input, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-mini-calendar',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    NzToolTipModule, NzDatePickerModule,NzCalendarModule,
  ],
  templateUrl: './mini-calendar.component.html',
  styleUrl: './mini-calendar.component.less',
  encapsulation: ViewEncapsulation.None
})
export class MiniCalendarComponent {
  @Input() year: number = new Date().getFullYear()
  @Input() month: number = 1;
  @Input() occupiedDates: { [day: number]: {color : string, applied: number, completed: number } } = {};
  date: Date = new Date;

  @ViewChild('defaultTooltipTemplate', { static: true }) defaultTooltipTemplate!: TemplateRef<void>;
  @ViewChild('customTooltipTemplate', { static: true }) customTooltipTemplate!: TemplateRef<void>;


  constructor() {
    this.updateDate();
  }

  disableOtherMonths = (current : Date): boolean => {
    return current.getMonth()!==this.month-1
  }

  updateDate(): void {
    this.date = new Date(this.year, this.month - 1, 1); // 해당 달의 첫째 날
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['year']){
      this.updateDate();
    }
  }

  getMonthName(): string {
    return this.month + '월';
  }

  getTooltipTitle(day: number) : string {

    if (!this.occupiedDates[day]) {
      return '휴가 없음'
    }
    return `신청: ${this.occupiedDates[day].applied}, 승인: ${this.occupiedDates[day].completed}`
  }
}
