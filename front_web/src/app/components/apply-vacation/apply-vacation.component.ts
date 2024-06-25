import { Component, Input } from '@angular/core';
import { ModalAddButtonComponent } from '../modal-add-button/modal-add-button.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VacationService } from '../../services/vacation.service';
import { Auth } from '../../interfaces/auth';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-apply-vacation',
  standalone: true,
  imports: [ReactiveFormsModule,NzButtonModule, FormsModule, ModalAddButtonComponent, NzDatePickerModule, CommonModule],
  templateUrl: './apply-vacation.component.html',
  styleUrl: './apply-vacation.component.less'
})
export class ApplyVacationComponent {
  
  @Input() auth : Auth = {} as Auth
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

  onChange(result: Date[], index:number): void {
    const control = this.vacations.at(index) as FormGroup;
    this.vacations.at(index).get('dateRange')?.setValue(result);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onCalendarChange(result: Array<Date | null>): void {
    console.log('onCalendarChange', result);
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
      approver_1: 1,
      approver_final: 2,
      vacations: vacationPlans
    });
  }

}
