import { Component, Input } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { Member } from '../../interfaces/member';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [FormsModule, NzCardComponent, NzFormModule,CommonModule, NzButtonModule, ReactiveFormsModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.less'
})
export class ProfileCardComponent {
  @Input() member: Member = {
    name: '',
    company_name: '',
    email: '',
    hire_date: new Date(),
    is_activate: true
  }

  validateForm: FormGroup<{
    password: FormControl<string>;
  }> = this.fb.group({
    password: ['', [Validators.required]],
  });

  password : string = ''

  constructor(private fb: NonNullableFormBuilder) {}

  deactivate(){
    alert('퇴사 처리')
  }

  submitEdit = () => {
    alert('변경'+ this.validateForm.value)
  }
}
