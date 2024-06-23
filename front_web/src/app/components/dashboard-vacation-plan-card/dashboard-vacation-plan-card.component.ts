import { Component, Input } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { DashboardVacationCardComponent } from '../dashboard-vacation-card/dashboard-vacation-card.component';
import { VacationPlan, createDefaultVacationPlan } from '../../interfaces/vacation-plan';

@Component({
  selector: 'app-dashboard-vacation-plan-card',
  standalone: true,
  imports: [NzListModule, DashboardVacationCardComponent],
  templateUrl: './dashboard-vacation-plan-card.component.html',
  styleUrl: './dashboard-vacation-plan-card.component.less'
})
export class DashboardVacationPlanCardComponent {
  @Input() vacationPlanData: VacationPlan = createDefaultVacationPlan();
}
