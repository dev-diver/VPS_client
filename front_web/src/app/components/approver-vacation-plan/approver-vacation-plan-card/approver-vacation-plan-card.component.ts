import { Component, Input, SimpleChanges } from '@angular/core';
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
  approveCancelable = false;
  rejectCancelable = false;
  private initialized: boolean = false;

  constructor(private vacationService : VacationService) {}

  ngOnInit() {
    this.initializeApprovalAuth();
  }

  ngOnChanges() {
    if (!this.initialized) {
      this.initializeApprovalAuth();
      this.initialized = true;
    }
    this.updateState();
  }

  private initializeApprovalAuth() {
    this.approvalAuth.member_id = this.auth.member.id;
    this.approvalAuth.approval_stage = this.vacationPlanData.approver_order.find((a) => a.member_id == this.auth.member.id)?.order || 0;
  }

  private updateState(){
      if(this.vacationPlanData.approve_stage == this.approvalAuth.approval_stage-1) {
        this.editable = true
        this.approveCancelable = false
      }else if(this.vacationPlanData.approve_stage == this.approvalAuth.approval_stage){
        this.editable = true
        this.approveCancelable = true
      }else{
        this.editable = false
      }
      if(this.vacationPlanData.reject_state) {
        this.rejectCancelable = true
      }else{
        this.rejectCancelable = false
      }
  }

  onApprove = () => {
    this.vacationService.approveVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.approve_stage = this.approvalAuth.approval_stage
      this.updateState();
    })
  }

  onCancelApprove = () => {
    this.vacationService.cancelApproveVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.approve_stage = this.approvalAuth.approval_stage - 1
      this.updateState();
    })
  }

  onReject = () => {
    this.vacationService.rejectVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.reject_state = true
      this.updateState();
    })
  }

  onCancelReject = () => {
    this.vacationService.cancelRejectVacationPlan(this.vacationPlanData.id, this.approvalAuth).then((data) => {
      this.vacationPlanData.reject_state = false
      this.updateState();
    })
  }
}
