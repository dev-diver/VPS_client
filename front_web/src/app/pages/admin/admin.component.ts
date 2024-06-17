import { Component } from '@angular/core';
import { AddCompanyButtonComponent } from '../../components/add-company-button/add-company-button.component';
import { CompanyManageCardComponent } from '../../components/company-manage-card/company-manage-card.component';
import { CompanyMembersCardComponent } from '../../components/company-members-card/company-members-card.component';
import { GroupManageCardComponent } from '../../components/group-manage-card/group-manage-card.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NzGridModule, AddCompanyButtonComponent, CompanyManageCardComponent, CompanyMembersCardComponent, GroupManageCardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {

}
