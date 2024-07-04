import { Component, Input } from '@angular/core';
import { Approver } from '../../interfaces/vacation-plan';
import { ApprovalAuth } from '../../interfaces/approval-auth';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

type NzType = "secondary" | "warning" | "danger" | "success" | undefined;

@Component({
  selector: 'app-approver-list',
  standalone: true,
  imports: [NzListModule,NzTypographyModule],
  templateUrl: './approver-list.component.html',
  styleUrl: './approver-list.component.less'
})
export class ApproverListComponent {
  @Input() approverList: Approver[] = [];
  @Input() approveStage: number = 0;
  @Input() rejectState: boolean = false;
  @Input() approvalAuth: ApprovalAuth = {} as ApprovalAuth;

  approveState : NzType[] = [];
  approvingIndex = 0;

  ngOnInit(){
    this.updateApproveState()
  }

  ngOnChanges(){
    this.updateApproveState()
  }
  
  updateApproveState(){
    this.approveState = this.approverList.map((a) => {
      let state = undefined
      if(a.order <= this.approveStage){
        state = "success" as NzType
      }
      if(a.order == this.approveStage && this.rejectState){
        state = "danger" as NzType
      }
      return state
    })
    this.approvingIndex = this.approverList.findIndex(a => a.order == this.approvalAuth.approval_stage)
  }
}