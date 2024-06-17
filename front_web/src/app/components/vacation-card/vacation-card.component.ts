import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-vacation-card',
  standalone: true,
  imports: [NzCardModule],
  templateUrl: './vacation-card.component.html',
  styleUrl: './vacation-card.component.less'
})
export class VacationCardComponent {
  @Input() year: number = new Date().getFullYear()
}
