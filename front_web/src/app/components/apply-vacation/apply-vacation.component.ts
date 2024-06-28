import { Component, Input } from '@angular/core';
import { ModalAddButtonComponent } from '../modal-add-button/modal-add-button.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VacationService } from '../../services/vacation.service';
import { Auth } from '../../interfaces/auth';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SerachAndSelectComponent } from '../serach-and-select/serach-and-select.component';
import { ID } from '../../interfaces/id';

@Component({
  selector: 'app-apply-vacation',
  standalone: true,
  imports: [SerachAndSelectComponent,ReactiveFormsModule,NzButtonModule, FormsModule, ModalAddButtonComponent, NzDatePickerModule, CommonModule],
  templateUrl: './apply-vacation.component.html',
  styleUrl: './apply-vacation.component.less'
})
export class ApplyVacationComponent {
  
  @Input() auth : Auth = {} as Auth
  selectedApprover1: ID = 0;
  selectedApproverFinal: ID = 0;
  vacations: FormArray<FormGroup>

  constructor(private fb: FormBuilder, private vacationService : VacationService) { 
    this.vacations = this.fb.array([
      this.fb.group({
        dateRange: [[]]
      })
    ])
  }

  createVacationFormGroup(): FormGroup {
    return this.fb.group({
      dateRange: [[]]
    });
  }

  addVacation() {
    this.vacations.push(this.createVacationFormGroup());
  }

  removeVacation(index: number) {
    this.vacations.removeAt(index);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onCalendarChange(result: Array<Date | null>, index:number): void {
    console.log('onCalendarChange', result);
    this.vacations.at(index).get('dateRange')?.setValue(result);
  }

  handleOk = async (): Promise<void> => {
    const vacationPlans = this.vacations.value.map((vacation: any) => ({
      start_date: vacation.dateRange[0],
      end_date: vacation.dateRange[1],
      half_first: false,
      half_last: false,
      vacation_type: 1
    }));

    await this.vacationService.postVacationPlan(this.auth.member.id, {
      approvers: [this.selectedApprover1, this.selectedApproverFinal],
      vacations: vacationPlans
    });
  }

}
