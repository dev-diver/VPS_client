import { Component, Input } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { ApproverVacationCardComponent } from '../approver-vacation-card/approver-vacation-card.component';
import { VacationPlan } from '../../../interfaces/vacation-plan';
import { NzCardModule } from 'ng-zorro-antd/card';
import { VacationService } from '../../../services/vacation.service';
import { ApprovalAuth } from '../../../interfaces/approval-auth';
import { ID } from '../../../interfaces/id';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-approver-vacation-plan-card',
  standalone: true,
  imports: [NzButtonModule, NzCardModule, NzListModule, ApproverVacationCardComponent],
  templateUrl: './approver-vacation-plan-card.component.html',
  styleUrl: './approver-vacation-plan-card.component.less'
})
export class ApproverVacationPlanCardComponent {
  approvalAuth: ApprovalAuth = {approval_state: 0, member_id: 0};
  @Input() memberId: ID = 0;
  @Input() vacationPlanData: VacationPlan = {} as VacationPlan;
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