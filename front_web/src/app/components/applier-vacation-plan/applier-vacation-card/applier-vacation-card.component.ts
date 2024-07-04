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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applier-vacation-card',
  standalone: true,
  imports: [NzDatePickerModule,ModalButtonComponent,NzButtonModule,NzCardModule, CommonModule],
  templateUrl: './applier-vacation-card.component.html',
  styleUrl: './applier-vacation-card.component.less'
})
export class ApplierVacationCardComponent {

  @Input() vacationPlanId :ID = 0;
  @Input() planDisabled = false;
  @Input() contents : Vacation = {} as Vacation;
  @Output() vacationChange = new EventEmitter<number>();
  @Output() vacationPlanChange = new EventEmitter<number>();
  
  vacation: FormGroup;
  disabled = false;
  rejected = false;

  constructor(private fb: FormBuilder, private vacationService : VacationService) {
    this.vacation = this.fb.group({
      dateRange: [[], Validators.required]
    });
  }

  ngOnInit() {
    if(this.contents.approve_stage != 0 ||
      this.planDisabled
    ) {
      this.disabled = true
    }
    if(this.contents.reject_state) {
      this.rejected = true
    }

  }

  onCancel = () => {
    this.vacationService.cancelVacation(this.contents.id).then((data) => {
      this.vacationPlanChange.emit(this.vacationPlanId);
    })
  }

  onCalendarChange(result: Array<Date | null>): void {
    console.log('onCalendarChange', result);
    this.vacation.get('dateRange')?.setValue(result);
  }

  handleOk = async (): Promise<void> => {
    try{
      let vacation: VacationRequest = {
        start_date: this.vacation.value.dateRange[0],
        end_date: this.vacation.value.dateRange[1],
        half_first: false,
        half_last: false,
        vacation_type: 0
      }
      await this.vacationService.changeVacation(this.contents.id, vacation).then((data) => {
        this.vacationChange.emit(this.contents.id);
      })
    }catch(error: any){
      if(error instanceof Error){
        throw new Error('휴가 신청에 실패했습니다. : ' + error.message)
      }
    }
  }

}
