import { Component, Input } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { DashboardVacationCardComponent } from '../dashboard-vacation-card/dashboard-vacation-card.component';
import { VacationPlan } from '../../interfaces/vacation-plan';

@Component({
  selector: 'app-dashboard-vacation-plan-card',
  standalone: true,
  imports: [NzListModule, DashboardVacationCardComponent],
  templateUrl: './dashboard-vacation-plan-card.component.html',
  styleUrl: './dashboard-vacation-plan-card.component.less'
})
export class DashboardVacationPlanCardComponent {
  @Input() vacationPlanData: VacationPlan = {
    id: 0,
    member_id: 0,
    member_name: '',
    apply_date: new Date(),
    approve_date: new Date(),
    vacations: [
      {
        teamName: '',
        name: '',
        startDatetime : new Date(),
        endDatetime : new Date(),
        process: true
      }
    ],
    process_state: 0,
    cancel_state: 0
  }
}
