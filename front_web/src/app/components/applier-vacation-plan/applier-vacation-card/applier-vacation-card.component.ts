import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { Vacation } from '../../../interfaces/vacation';
import { Vacation as VacationRequest } from '../../../interfaces/request/vacation';
import { VacationService } from '../../../services/vacation.service';
import { ID } from '../../../interfaces/id';
import { ModalButtonComponent } from '../../modal-button/modal-button.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-applier-vacation-card',
  standalone: true,
  imports: [NzDatePickerModule,ModalButtonComponent,NzButtonModule,NzCardModule, CommonModule],
  templateUrl: './applier-vacation-card.component.html',
  styleUrl: './applier-vacation-card.component.less'
})
export class ApplierVacationCardComponent {

  @Input() vacationPlanId :ID = 0;
  @Input() contents : Vacation = {} as Vacation;
  @Output() vacationChange = new EventEmitter<number>();
  @Output() vacationPlanChange = new EventEmitter<number>();
  disabled = false;

  constructor(private vacationService : VacationService) {}

  ngOnInit() {
    if(this.contents.approve_stage != 0) {
      this.disabled = true
    }
  }

  onCancel = () => {
    this.vacationService.cancelVacation(this.contents.id).then((data) => {
      this.vacationPlanChange.emit(this.vacationPlanId);
    })
  }

  onChange = (vacation: VacationRequest) => {
    this.vacationService.changeVacation(this.contents.id, vacation).then((data) => {
      this.vacationChange.emit(this.contents.id);
    })
  }

  //
  handleOk = async (): Promise<void> => {
  }

  onOk= (result: Date | Date[] | null): void => {

  }

  onCalendarChange = (result: Array<Date | null>) => {

  }

}
