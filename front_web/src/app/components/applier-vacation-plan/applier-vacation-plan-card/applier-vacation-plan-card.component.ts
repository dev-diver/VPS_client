import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { ApplierVacationCardComponent } from '../applier-vacation-card/applier-vacation-card.component';
import { ApprovalAuth } from '../../../interfaces/approval-auth';
import { VacationPlan } from '../../../interfaces/vacation-plan';
import { VacationService } from '../../../services/vacation.service';
import { ID } from '../../../interfaces/id';
import { ApproverListComponent } from '../../approver-list/approver-list.component';
import { ChangeVacationPlanButtonComponent } from '../change-vacation-plan-button/change-vacation-plan-button.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-applier-vacation-plan-card',
  standalone: true,
  imports: [
    NzButtonModule, NzCardModule, NzListModule, NzTypographyModule,
    ApplierVacationCardComponent, ApproverListComponent, ChangeVacationPlanButtonComponent
  ],
  templateUrl: './applier-vacation-plan-card.component.html',
  styleUrl: './applier-vacation-plan-card.component.less'
})
export class ApplierVacationPlanCardComponent {
  approvalAuth: ApprovalAuth = {} as ApprovalAuth;
  @Input() memberId: ID = 0;
  @Input() vacationPlanData: VacationPlan = {} as VacationPlan;
  @Input() onVacationPlanChange = (id: number): void => {};
  @Output() vacationPlanDelete = new EventEmitter<number>();
  
  disabled = false;
  rejected = false;
  completed = false;

  constructor(private vacationService : VacationService) {}

  ngOnInit() {
    if(
      this.vacationPlanData.approve_stage != 0
    ) {
      this.disabled = true
    }
    if(this.vacationPlanData.reject_state) {
      this.disabled = true
      this.rejected = true
    }
    if(this.vacationPlanData.complete_state) {
      this.disabled = true
      this.completed = true
    }
  }

  onCancel = () => {
    this.vacationService.cancelVacationPlan(this.vacationPlanData.id).then((data) => {
      this.vacationPlanDelete.emit(this.vacationPlanData.id);
    })
  }

  onVacationChange(id: number) {
    this.vacationService.getVacationById(id).then(updatedVacation => {
      const index = this.vacationPlanData.vacations.findIndex(v => v.id === id);
      if (index !== -1) {
        this.vacationPlanData.vacations[index] = updatedVacation;
      }
    });
  }

}
