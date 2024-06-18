import { Component, Input } from '@angular/core';
import { MiniCalendarComponent } from '../mini-calendar/mini-calendar.component';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-year-calendar',
  standalone: true,
  imports: [NzButtonModule,NzIconModule,MiniCalendarComponent, CommonModule],
  templateUrl: './year-calendar.component.html',
  styleUrl: './year-calendar.component.less'
})
export class YearCalendarComponent {
  @Input() year: number = new Date().getFullYear()
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);

  decreaseYear = () => {
    this.year-=1
  }

  increaseYear = () => {
    this.year+=1
  }
}
