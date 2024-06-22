import { Component, Input } from '@angular/core';
import { VacationInfo } from '../../interfaces/vacation-info';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-vacation-card',
  standalone: true,
  imports: [NzCardModule, CommonModule],
  templateUrl: './dashboard-vacation-card.component.html',
  styleUrl: './dashboard-vacation-card.component.less'
})
export class DashboardVacationCardComponent {
  @Input() contents : VacationInfo = {
    teamName : '',
    name: '',
    startDatetime : new Date(),
    endDatetime : new Date(),
    process: false
  }
}
