import { Component, Input, SimpleChanges } from '@angular/core';
import { VacationService } from '../../services/vacation.service';
import { VacationPlan } from '../../interfaces/vacation-plan';
import { NzListModule } from 'ng-zorro-antd/list';
import { ApproverVacationPlanCardComponent } from './approver-vacation-plan-card/approver-vacation-plan-card.component';
import { Subscription } from 'rxjs';

export type Mode = 'process' | 'approved'
@Component({
  selector: 'app-approver-vacation-plan',
  standalone: true,
  imports: [NzListModule, ApproverVacationPlanCardComponent],
  templateUrl: './approver-vacation-plan.component.html',
  styleUrl: './approver-vacation-plan.component.less'
})
export class ApproverVacationPlanComponent {

  @Input() year: number = 0
  @Input() mode: Mode = 'process'
  private refreshSubscription : Subscription | null = null

  data: VacationPlan[] = []

  constructor(private vacationService : VacationService) {}

  ngOnInit(): void {
    this.refreshSubscription = this.vacationService.vacationRefresh$.subscribe(() => {
      this.requestPeriodVacationPlans();
    })
  }

  ngOnDestroy(): void {
    if(this.refreshSubscription){
      this.refreshSubscription.unsubscribe();
    }
  }

  requestPeriodVacationPlans = () : void => {
    if (this.mode === 'process') {
      this.vacationService.getApproverVacationPlansWithYear(this.year).then((data) => {
        this.data = data
      })
    } else if (this.mode === 'approved'){
      this.vacationService.getApproverApprovedVacationPlansWithYear(this.year).then((data) => {
        this.data = data
      })
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['year']) {
      this.requestPeriodVacationPlans();
    }
  }
}
