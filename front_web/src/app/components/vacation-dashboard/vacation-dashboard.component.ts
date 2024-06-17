import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacation-dashboard',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzListModule],
  templateUrl: './vacation-dashboard.component.html',
  styleUrl: './vacation-dashboard.component.less'
})
export class VacationDashboardComponent {
  @Input() year: number = new Date().getFullYear()
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

}
