import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { ModalAddButtonComponent } from '../modal-add-button/modal-add-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NameTagComponent } from '../name-tag/name-tag.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-company-members-card',
  standalone: true,
  imports: [NzCardComponent, ModalAddButtonComponent, NzIconModule, NameTagComponent, NzListModule, NzGridModule],
  templateUrl: './company-members-card.component.html',
  styleUrl: './company-members-card.component.less'
})
export class CompanyMembersCardComponent {
  data = [
    {
      name: '소경현'
    },
    {
      name: '김장겸'
    },
  ];
}
