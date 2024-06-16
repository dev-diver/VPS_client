import { Component } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NzCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent {

}
