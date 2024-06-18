import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FoldingCardComponent } from '../folding-card/folding-card.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

interface CompanyForm {
  companyName: FormControl<string | null>;
  accountingDay: FormControl<string | null>;
  vacationGenerateStandard: FormControl<number | null>;
  vacationForFirstYear: FormControl<number | null>;
  vacationForUnderYear: FormControl<number | null>;
}
@Component({
  selector: 'app-company-manage-card',
  standalone: true,
  imports: [NzButtonModule, FormsModule, ReactiveFormsModule, NzCardComponent, NzFormModule, NzInputModule, NzSelectModule, FoldingCardComponent],
  templateUrl: './company-manage-card.component.html',
  styleUrl: './company-manage-card.component.less'
})
export class CompanyManageCardComponent {

  validateForm: FormGroup<CompanyForm>;

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group<CompanyForm>({
      companyName: new FormControl('', [Validators.required]),
      accountingDay: new FormControl('', [Validators.required]),
      vacationGenerateStandard: new FormControl<number | null>(null, [Validators.required]),
      vacationForFirstYear: new FormControl<number | null>(null, [Validators.required]),
      vacationForUnderYear: new FormControl<number | null>(null, [Validators.required])
    });
  }

  submitEdit = () => {
    alert('변경'+ this.validateForm.value)
  }

}
