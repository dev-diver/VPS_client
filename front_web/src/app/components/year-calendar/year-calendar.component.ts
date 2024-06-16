import { Component } from '@angular/core';
import { MiniCalendarComponent } from '../../components/mini-calendar/mini-calendar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-year-calendar',
  standalone: true,
  imports: [MiniCalendarComponent, CommonModule],
  templateUrl: './year-calendar.component.html',
  styleUrl: './year-calendar.component.less'
})
export class YearCalendarComponent {
  year : number = new Date().getFullYear()
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
}
