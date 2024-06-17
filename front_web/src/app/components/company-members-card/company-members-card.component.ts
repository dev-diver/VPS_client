import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-company-members-card',
  standalone: true,
  imports: [NzCardComponent],
  templateUrl: './company-members-card.component.html',
  styleUrl: './company-members-card.component.less'
})
export class CompanyMembersCardComponent {
  
}
