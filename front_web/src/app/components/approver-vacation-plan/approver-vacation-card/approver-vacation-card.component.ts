import { Component, Input } from '@angular/core';
import { Vacation } from '../../../interfaces/vacation';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { VacationService } from '../../../services/vacation.service';

@Component({
  selector: 'app-approver-vacation-card',
  standalone: true,
  imports: [NzButtonModule,NzCardModule, CommonModule],
  templateUrl: './approver-vacation-card.component.html',
  styleUrl: './approver-vacation-card.component.less'
})
export class ApproverVacationCardComponent {
  @Input() contents : Vacation = {} as Vacation;
  @Input() editablePlan = false;
  @Input() cancelablePlan = false;
  editable = false;
  cancelable = false;

  constructor(private vacationService : VacationService) {}

  ngOnInit() {
    if(this.contents.process_state == 4 || this.editablePlan || this.cancelablePlan) {
      this.editable = true
      this.cancelable = false
    }
  }

  onReject = () => {
    this.vacationService.rejectVacation(this.contents.id).then((data) => {
      this.contents.process_state = 4
      this.editable = true
    })
  }

  onCancelReject = () => {
    this.vacationService.cancelRejectVacation(this.contents.id).then((data) => {
      this.contents.process_state = 1
      this.editable = false
    })
  }

}
