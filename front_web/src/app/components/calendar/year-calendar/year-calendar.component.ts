import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MiniCalendarComponent } from '../mini-calendar/mini-calendar.component';
import { CommonModule } from '@angular/common';
import { YearChangeComponent } from '../../year-change/year-change.component';
@Component({
  selector: 'app-year-calendar',
  standalone: true,
  imports: [YearChangeComponent,MiniCalendarComponent, CommonModule],
  templateUrl: './year-calendar.component.html',
  styleUrl: './year-calendar.component.less',
  encapsulation: ViewEncapsulation.None
})
export class YearCalendarComponent {
  @Input() year: number = new Date().getFullYear()
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
}
