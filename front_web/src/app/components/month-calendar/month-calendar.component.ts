import { Component } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-month-calendar',
  standalone: true,
  imports: [NzCalendarModule],
  templateUrl: './month-calendar.component.html',
  styleUrl: './month-calendar.component.less'
})
export class MonthCalendarComponent {

}
