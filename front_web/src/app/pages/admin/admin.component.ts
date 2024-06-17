import { Component } from '@angular/core';
import { CompanyManageCardComponent } from '../../components/company-manage-card/company-manage-card.component';
import { CompanyMembersCardComponent } from '../../components/company-members-card/company-members-card.component';
import { GroupManageCardComponent } from '../../components/group-manage-card/group-manage-card.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ModalAddButtonComponent } from '../../components/modal-add-button/modal-add-button.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NzGridModule, CompanyManageCardComponent, CompanyMembersCardComponent, GroupManageCardComponent, ModalAddButtonComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {

}
