import { Component, Input, SimpleChanges } from '@angular/core';
import { VacationService } from '../../services/vacation.service';
import { VacationPlan } from '../../interfaces/vacation-plan';
import { NzListModule } from 'ng-zorro-antd/list';
import { ApproverVacationPlanCardComponent } from './approver-vacation-plan-card/approver-vacation-plan-card.component';

@Component({
  selector: 'app-approver-vacation-plan',
  standalone: true,
  imports: [NzListModule, ApproverVacationPlanCardComponent],
  templateUrl: './approver-vacation-plan.component.html',
  styleUrl: './approver-vacation-plan.component.less'
})
export class ApproverVacationPlanComponent {

  @Input() year: number = 0
  data: VacationPlan[] = []

  constructor(private vacationService : VacationService) { }


  requestPeriodVacationPlans = () : void => {
    this.vacationService.getApproverVacationPlansWithYear(this.year).then((data) => {
      this.data = data
    })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['year']) {
      this.requestPeriodVacationPlans();
    }
  }
}
