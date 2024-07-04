import { Component, Input, SimpleChanges } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { ApproverVacationCardComponent } from '../approver-vacation-card/approver-vacation-card.component';
import { VacationPlan } from '../../../interfaces/vacation-plan';
import { NzCardModule } from 'ng-zorro-antd/card';
import { VacationService } from '../../../services/vacation.service';
import { ApprovalAuth } from '../../../interfaces/approval-auth';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Auth } from '../../../interfaces/auth';
import { ApproverListComponent } from '../../approver-list/approver-list.component';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';
import { ID } from '../../../interfaces/id';

@Component({
  selector: 'app-approver-vacation-plan-card',
  standalone: true,
  imports: [
    NzButtonModule, NzCardModule, NzListModule, 
    ApproverVacationCardComponent, ApproverListComponent
  ],
  templateUrl: './approver-vacation-plan-card.component.html',
  styleUrl: './approver-vacation-plan-card.component.less'
})
export class ApproverVacationPlanCardComponent {

  private auth: Auth | null = null;
  private memberId: ID = 0;
  private authSubscription: Subscription
  approvalAuth: ApprovalAuth = {} as ApprovalAuth;
  @Input() vacationPlanData: VacationPlan = {} as VacationPlan;

  editable = false;
  approveCancelable = false;
  rejectCancelable = false;

  private initialized = false;

  constructor(private authService : AuthService,private vacationService : VacationService) {
    this.authSubscription = this.authService.auth$.subscribe(auth => {
      this.auth = auth;
      if(auth){
        this.memberId = auth.member.id;
      }else {
        this.memberId = 0;
      }
    })
  }

  ngOnChanges() {
    if(!this.initialized){
      this.initializePlanApprovalAuth();
    }
    this.updateState();
  }

  ngOnDestroy(): void {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

  private initializePlanApprovalAuth() {
    this.approvalAuth.member_id = this.memberId;
    this.approvalAuth.approval_stage = this.vacationPlanData.approver_order.
      find((a) => a.member_id == this.memberId)?.order || 0;
  }

  private updateState(){
    this.editable = true
      if(this.vacationPlanData.reject_state) {
        this.rejectCancelable = true
      }else{
        this.rejectCancelable = false
        if(this.vacationPlanData.approve_stage == this.approvalAuth.approval_stage-1) {
          this.approveCancelable = false
        }else if(this.vacationPlanData.approve_stage == this.approvalAuth.approval_stage){
          this.approveCancelable = true
        }else{
          this.editable = false
        }
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
