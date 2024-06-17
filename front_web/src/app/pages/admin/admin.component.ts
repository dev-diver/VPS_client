import { Component } from '@angular/core';
import { CompanyManageCardComponent } from '../../components/company-manage-card/company-manage-card.component';
import { CompanyMembersCardComponent } from '../../components/company-members-card/company-members-card.component';
import { GroupManageCardComponent } from '../../components/group-manage-card/group-manage-card.component';
import { ModalAddButtonComponent } from '../../components/modal-add-button/modal-add-button.component';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [PageLayoutComponent,CompanyManageCardComponent, CompanyMembersCardComponent, GroupManageCardComponent, ModalAddButtonComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {

}
