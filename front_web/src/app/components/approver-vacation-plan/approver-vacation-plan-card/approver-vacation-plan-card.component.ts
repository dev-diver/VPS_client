import { Component, Input } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { ApproverVacationCardComponent } from '../approver-vacation-card/approver-vacation-card.component';
import { VacationPlan } from '../../../interfaces/vacation-plan';
import { NzCardModule } from 'ng-zorro-antd/card';
import { VacationService } from '../../../services/vacation.service';
import { ApprovalAuth } from '../../../interfaces/approval-auth';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Auth } from '../../../interfaces/auth';

@Component({
  selector: 'app-approver-vacation-plan-card',
  standalone: true,
  imports: [NzButtonModule, NzCardModule, NzListModule, ApproverVacationCardComponent],
  templateUrl: './approver-vacation-plan-card.component.html',
  styleUrl: './approver-vacation-plan-card.component.less'
})
export class ApproverVacationPlanCardComponent {
  approvalAuth: ApprovalAuth = {} as ApprovalAuth;
  @Input() auth: Auth = {} as Auth;
  @Input() vacationPlanData: VacationPlan = {} as VacationPlan;
  editable = false;
  cancelable = false;

  constructor(private vacationService : VacationService) {}

  ngOnInit() {
    this.approvalAuth.member_id = this.auth.member.id
    this.approvalAuth.approval_stage = this.vacationPlanData.approver_order.find((a) => a.member_id == this.auth.member.id)?.order || 0

    console.log(this.vacationPlanData.approve_stage, this.approvalAuth.approval_stage)

    if(this.vacationPlanData.approve_stage == this.approvalAuth.approval_stage-1) {
      this.editable = true
      if(this.vacationPlanData.reject_state) {
        this.cancelable = true
      }
    }
  }

  onApprove = () => {
    this.vacationService.approveVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.approve_stage = this.approvalAuth.approval_stage
      this.editable = false
      //승인된 연차 빼기
    })
  }

  onCancelApprove = () => {
    this.vacationService.cancelApproveVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.approve_stage = this.approvalAuth.approval_stage - 1
      this.editable = true
    })
  }

  onReject = () => {
    this.vacationService.rejectVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.reject_state = true
      this.cancelable = true
    })
  }

  onCancelReject = () => {
    this.vacationService.cancelRejectVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.reject_state = false
      this.cancelable = false
    })
  }
}
