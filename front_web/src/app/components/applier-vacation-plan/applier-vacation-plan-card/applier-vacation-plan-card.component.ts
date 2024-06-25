import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { ApplierVacationCardComponent } from '../applier-vacation-card/applier-vacation-card.component';
import { ApprovalAuth } from '../../../interfaces/approval-auth';
import { VacationPlan } from '../../../interfaces/vacation-plan';
import { VacationService } from '../../../services/vacation.service';
import { ID } from '../../../interfaces/id';

@Component({
  selector: 'app-applier-vacation-plan-card',
  standalone: true,
  imports: [NzButtonModule, NzCardModule, NzListModule, ApplierVacationCardComponent],
  templateUrl: './applier-vacation-plan-card.component.html',
  styleUrl: './applier-vacation-plan-card.component.less'
})
export class ApplierVacationPlanCardComponent {
  approvalAuth: ApprovalAuth = {approval_state: 0, member_id: 0};
  @Input() memberId: ID = 0;
  @Input() vacationPlanData: VacationPlan = {} as VacationPlan;
  @Input() onVacationPlanChange = (id: number): void => {};
  @Output() vacationPlanDelete = new EventEmitter<number>();
  disabled = false;

  constructor(private vacationService : VacationService) {}

  ngOnInit() {
    if(this.vacationPlanData.process_state != 1) {
      this.disabled = true
    }
  }

  onCancel = () => {
    this.vacationService.cancelVacationPlan(this.vacationPlanData.id).then((data) => {
      this.vacationPlanDelete.emit(this.vacationPlanData.id);
    })
  }

  onChange = () => {
    this.vacationService.changeVacationPlan(this.vacationPlanData.id).then((data) => {
      this.onVacationPlanChange(this.vacationPlanData.id);
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
