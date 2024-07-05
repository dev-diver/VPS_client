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
  monthlyOccupiedDates: { [key: number]: { [day: number]: {color:string, applied: number, completed: number} } } = {};

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
      this.vacationService.getCompanyVacationsWithYear(this.year).then((data) => {
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

    const monthlyDates: { [key: number]: { [day: number]: { apply_count: number, complete_count: number} } } = Object.assign(
      {},
      ...Array.from({ length: 12 }, (_, i) => ({ [i + 1]: {} }))
    );

    this.data.forEach((vacation) => {
      const start = new Date(vacation.start_date);
      const end = new Date(vacation.end_date);
      const complete_state = vacation.complete_state;

      let current = new Date(start);

      while (current <= end) {
        const month = current.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
        const day = current.getDate();
        
        if (!monthlyDates[month][day]) {
          monthlyDates[month][day] = { apply_count: 0, complete_count: 0 };
        }
        
        if(complete_state){
          monthlyDates[month][day].complete_count += 1;
        }else{
          monthlyDates[month][day].apply_count += 1;
        }
        current.setDate(current.getDate() + 1);
      }
    });


    for (let month in monthlyDates) {
      this.monthlyOccupiedDates[parseInt(month)] = {};
      for (let day in monthlyDates[month]) {
        const data = monthlyDates[month][day];
  
        let color;
        if (data.complete_count > 0) {
          const completeCount = Math.min(data.complete_count, 5);
          const greenValue = Math.max(160 - (completeCount - 1) * 10, 120);
          color = `rgb(0, ${greenValue}, 0)`;
        } else {
          const applyCount = Math.min(data.apply_count, 5);
          const greenValue = Math.max(160 - (applyCount - 1) * 10, 120);
          color = `rgba(0, ${greenValue}, 0, 0.25)`;
        }
        
        this.monthlyOccupiedDates[parseInt(month)][parseInt(day)] = {color: color, applied: data.apply_count, completed: data.complete_count};
      }
    }
  }

  getKeys(obj: { [key: number]: { [day: number]:  {color:string, applied: number, completed: number} } }): number[] {
    return Object.keys(obj).map(Number);
  }
}
