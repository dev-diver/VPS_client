import { Component, Input } from '@angular/core';
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { VacationService } from '../../services/vacation.service';
import { Auth } from '../../interfaces/auth';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SearchAndSelectComponent } from '../search-and-select/search-and-select.component';
import { ID } from '../../interfaces/id';

@Component({
  selector: 'app-apply-vacation',
  standalone: true,
  imports: [SearchAndSelectComponent,ReactiveFormsModule,NzButtonModule, FormsModule, ModalButtonComponent, NzDatePickerModule, CommonModule],
  templateUrl: './apply-vacation.component.html',
  styleUrl: './apply-vacation.component.less'
})
export class ApplyVacationComponent {
  
  @Input() auth : Auth = {} as Auth
  vacations: FormArray<FormGroup>
  approver: FormArray<FormGroup>

  constructor(private fb: FormBuilder, private vacationService : VacationService) { 
    this.vacations = this.fb.array([
      this.createVacationFormGroup()
    ])
    this.approver = this.fb.array([
      this.createApproverFormGroup()
    ])

  }

  createVacationFormGroup(): FormGroup {
    return this.fb.group({
      dateRange: [[], Validators.required]
    });
  }

  createApproverFormGroup(): FormGroup {
    return this.fb.group({
      id: [null, Validators.required]
    });
  }

  addVacation() {
    this.vacations.push(this.createVacationFormGroup());
  }

  removeVacation(index: number) {
    this.vacations.removeAt(index);
  }

  addApprover() {
    this.approver.push(this.createApproverFormGroup());
  }

  removeApprover(index: number) {
    this.approver.removeAt(index);
  }

  selectedApprover(index:number, id:number) {
    this.approver.at(index).get('id')?.setValue(id);
  }

  onCalendarChange(result: Array<Date | null>, index:number): void {
    console.log('onCalendarChange', result);
    this.vacations.at(index).get('dateRange')?.setValue(result);
  }

  handleOk = async (): Promise<void> => {

    if (this.approver.invalid) {
      throw new Error('결재자를 다 채워주세요');
    }

    if (this.vacations.invalid) {
      throw new Error('휴가 범위를 다 채워주세요');
    }

    const vacationPlans = this.vacations.value.map((vacation: any) => ({
      start_date: vacation.dateRange[0],
      end_date: vacation.dateRange[1],
      half_first: false,
      half_last: false,
      vacation_type: 1
    }));

    try{
      await this.vacationService.postVacationPlan(this.auth.member.id, {
        approvers: this.approver.value.map((approver: any) => approver.id),
        vacations: vacationPlans
      });
    }catch(error : any){
      if(error instanceof Error){
        throw new Error('휴가 신청에 실패했습니다. : '+ error.message);
      }
    }
  }
}
