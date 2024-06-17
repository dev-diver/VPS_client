import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { ModalAddButtonComponent } from '../modal-add-button/modal-add-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-company-members-card',
  standalone: true,
  imports: [NzCardComponent, ModalAddButtonComponent, NzIconModule],
  templateUrl: './company-members-card.component.html',
  styleUrl: './company-members-card.component.less'
})
export class CompanyMembersCardComponent {
  
}
