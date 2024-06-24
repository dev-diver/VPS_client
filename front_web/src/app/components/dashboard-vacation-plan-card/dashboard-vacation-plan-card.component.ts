import { Component, Input } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { DashboardVacationCardComponent } from '../dashboard-vacation-card/dashboard-vacation-card.component';
import { VacationPlan, createDefaultVacationPlan } from '../../interfaces/vacation-plan';
import { NzCardModule } from 'ng-zorro-antd/card';
import { VacationService } from '../../services/vacation.service';
import { ApprovalAuth } from '../../interfaces/approval-auth';
import { ID } from '../../interfaces/id';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-dashboard-vacation-plan-card',
  standalone: true,
  imports: [NzButtonModule, NzCardModule, NzListModule, DashboardVacationCardComponent],
  templateUrl: './dashboard-vacation-plan-card.component.html',
  styleUrl: './dashboard-vacation-plan-card.component.less'
})
export class DashboardVacationPlanCardComponent {
  approvalAuth: ApprovalAuth = {approval_state: 1, member_id: 1};
  @Input() memberId: ID = 1;
  @Input() vacationPlanData: VacationPlan = createDefaultVacationPlan();
  disabled = false;

  constructor(private vacationService : VacationService) {}

  ngOnInit() {
    if(this.vacationPlanData.process_state == 4) {
      this.disabled = true
    }

    if(this.memberId == this.vacationPlanData.approver_1) {
      this.approvalAuth.approval_state = 2
      this.approvalAuth.member_id = this.memberId
    }else if(this.memberId == this.vacationPlanData.approver_final) {
      this.approvalAuth.approval_state = 3
      this.approvalAuth.member_id = this.memberId
    }

  }

  onApprove = () => {
    this.vacationService.approveVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.process_state = this.approvalAuth.approval_state
      this.disabled = true
    })
  }

  onReject = () => {
    this.vacationService.rejectVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.process_state = 4
      this.disabled = true
    })
  }

  onCancelReject = () => {
    this.vacationService.cancelRejectVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.process_state = this.approvalAuth.approval_state-1
      this.disabled = false
    })
  }
}
