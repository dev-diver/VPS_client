import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-vacation-promotion-dashboard',
  standalone: true,
  imports: [CommonModule, NzListModule],
  templateUrl: './vacation-promotion-dashboard.component.html',
  styleUrl: './vacation-promotion-dashboard.component.less'
})
export class VacationPromotionDashboardComponent {
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
}
