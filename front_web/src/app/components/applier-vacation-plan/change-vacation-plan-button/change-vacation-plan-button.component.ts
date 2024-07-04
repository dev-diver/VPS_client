import { Component, Input } from '@angular/core';
import { ModalButtonComponent } from '../../modal-button/modal-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SearchAndSelectComponent } from '../../search-and-select/search-and-select.component';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VacationService } from '../../../services/vacation.service';
import { VacationPlan } from '../../../interfaces/vacation-plan';
import { EditVacationPlan } from '../../../interfaces/request/vacation-plan';

@Component({
  selector: 'app-change-vacation-plan-button',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    NzButtonModule,
    ModalButtonComponent, SearchAndSelectComponent
  ],
  templateUrl: './change-vacation-plan-button.component.html',
  styleUrl: './change-vacation-plan-button.component.less'
})
export class ChangeVacationPlanButtonComponent {

  approver: FormArray<FormGroup>
  @Input() vacationPlanData: VacationPlan = {} as VacationPlan

  constructor(
    private fb: FormBuilder, 
    private vacationService : VacationService,
  ) { 
    this.approver = this.fb.array([
      this.createApproverFormGroup()
    ])
  }

  createApproverFormGroup(): FormGroup {
    return this.fb.group({
      id: [null, Validators.required]
    });
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

  handleOk =  async (): Promise<void> => {

    if (this.approver.invalid) {
      throw new Error('결재자를 다 채워주세요');
    }

    let editVacationPlan : EditVacationPlan = {
      approver_order: this.approver.value.map((approver: any) => approver.id),
    }

    try{
      await this.vacationService.changeVacationPlan(this.vacationPlanData.id, editVacationPlan).then((data) => {
        console.log(data)
      })
    }catch(error: any){
      if(error instanceof Error){
        throw new Error('결재라인 변경에 실패했습니다. : ' + error.message)
      }
    }
    
  }
}
