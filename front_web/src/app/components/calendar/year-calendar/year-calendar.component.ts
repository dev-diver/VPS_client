import { Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MiniCalendarComponent } from '../mini-calendar/mini-calendar.component';
import { CommonModule } from '@angular/common';
import { YearChangeComponent } from '../../year-change/year-change.component';
import { VacationService } from '../../../services/vacation.service';
import { Vacation } from '../../../interfaces/vacation';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-year-calendar',
  standalone: true,
  imports: [YearChangeComponent,MiniCalendarComponent, CommonModule],
  providers: [DatePipe],
  templateUrl: './year-calendar.component.html',
  styleUrl: './year-calendar.component.less',
  encapsulation: ViewEncapsulation.None
})
export class YearCalendarComponent {
  @Input() year: number = new Date().getFullYear()

  data: Vacation[] = []
  monthlyOccupiedDates: { [key: number]: { [day: number]: string } } = {};

  constructor(private vacationService : VacationService, private datePipe : DatePipe) { }

  ngOnInit(): void {
    this.initializeMonthlyOccupiedDates();
  }

  initializeMonthlyOccupiedDates() {
    this.monthlyOccupiedDates = Object.assign(
      {},
      ...Array.from({ length: 12 }, (_, i) => ({ [i + 1]: {} }))
    );
  }

  requestPeriodVacations = () : void => {
      this.vacationService.getCompanyCompletedVacationsWithYear(this.year).then((data) => {
        console.log(data)
        this.data = data
        this.aggregateMonthlyOccupiedDates()
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['year']) {
      this.requestPeriodVacations();
    }
  }

  aggregateMonthlyOccupiedDates() {

    const monthlyDates: { [key: number]: { [day: number]: string } } = Object.assign(
      {},
      ...Array.from({ length: 12 }, (_, i) => ({ [i + 1]: {} }))
    );

    this.data.forEach((vacation) => {
      const start = new Date(vacation.start_date);
      const end = new Date(vacation.end_date);

      let current = new Date(start);

      while (current <= end) {
        const month = current.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
        const day = current.getDate();
        monthlyDates[month][day] = '#1890ff';
        current.setDate(current.getDate() + 1);
      }
    });

    this.monthlyOccupiedDates = monthlyDates;
    console.log(this.monthlyOccupiedDates);
  }

  getKeys(obj: { [key: number]: { [day: number]: string } }): number[] {
    return Object.keys(obj).map(Number);
  }
}
