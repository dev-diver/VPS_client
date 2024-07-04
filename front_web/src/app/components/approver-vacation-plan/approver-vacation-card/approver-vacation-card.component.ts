import { Component, Input } from '@angular/core';
import { Vacation } from '../../../interfaces/vacation';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { VacationService } from '../../../services/vacation.service';
import { ApprovalAuth } from '../../../interfaces/approval-auth';

@Component({
  selector: 'app-approver-vacation-card',
  standalone: true,
  imports: [NzButtonModule,NzCardModule, CommonModule],
  templateUrl: './approver-vacation-card.component.html',
  styleUrl: './approver-vacation-card.component.less'
})
export class ApproverVacationCardComponent {
  @Input() contents : Vacation = {} as Vacation;
  @Input() planEditable = false;
  @Input() planRejectCancelable = false;
  @Input() planApproveCancelable = false;
  @Input() approvalAuth = {} as ApprovalAuth;

  editable = true;
  rejectCancelable = false;

  constructor(private vacationService : VacationService) {}

  ngOnChanges() {
    this.updateState()
  }

  private updateState(){
    if(!this.planEditable || this.planApproveCancelable || this.planRejectCancelable){
      this.editable = false
    }else{
      this.editable = true
    }
    if(this.contents.reject_state){
      this.rejectCancelable = true
    }else{
      this.rejectCancelable = false
    }
  }

  onReject = () => {
    this.vacationService.rejectVacation(this.contents.id, this.approvalAuth).then((data) => {
      this.contents.reject_state = true
      this.updateState()
    })
  }

  onCancelReject = () => {
    this.vacationService.cancelRejectVacation(this.contents.id, this.approvalAuth).then((data) => {
      this.contents.reject_state = false
      this.updateState()
    })
  }

}
