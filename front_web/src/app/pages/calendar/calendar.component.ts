import { Component } from '@angular/core';
import { YearCalendarComponent } from '../../components/year-calendar/year-calendar.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [YearCalendarComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent {

}
