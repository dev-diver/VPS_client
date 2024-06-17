import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FoldingCardComponent } from '../folding-card/folding-card.component';

@Component({
  selector: 'app-company-manage-card',
  standalone: true,
  imports: [NzCardComponent, NzFormModule, NzInputModule, NzSelectModule, FoldingCardComponent],
  templateUrl: './company-manage-card.component.html',
  styleUrl: './company-manage-card.component.less'
})
export class CompanyManageCardComponent {

}
