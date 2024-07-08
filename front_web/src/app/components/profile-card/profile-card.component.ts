import { Component, Input } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [FormsModule, NzCardComponent, NzFormModule,CommonModule, NzButtonModule, ReactiveFormsModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.less'
})
export class ProfileCardComponent {
  
  authInfo: Auth | null = null;
  private authSubscription: Subscription;

  validateForm: FormGroup<{
    password: FormControl<string>;
  }> = this.fb.group({
    password: ['', [Validators.required]],
  });

  password : string = ''

  constructor(private authService : AuthService ,private fb: NonNullableFormBuilder) {
    this.authSubscription = this.authService.getAuth().subscribe((authInfo) => {
      this.authInfo = authInfo;
    });
  }

  deactivate(){
    alert('퇴사 처리')
  }

  submitEdit = () => {
    alert('변경'+ this.validateForm.value)
  }

  ngOnDestroy() {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }
}
