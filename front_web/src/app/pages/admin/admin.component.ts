import { Component } from '@angular/core';
import { CompanyManageCardComponent } from '../../components/company-manage-card/company-manage-card.component';
import { CompanyMembersCardComponent } from '../../components/company-members-card/company-members-card.component';
import { GroupManageCardComponent } from '../../components/group-manage-card/group-manage-card.component';
import { ModalButtonComponent } from '../../components/modal-button/modal-button.component';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { FoldingCardComponent } from '../../components/folding-card/folding-card.component';
import { CompanyCardComponent } from '../../components/company-card/company-card.component';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CompanyCardComponent, FoldingCardComponent,PageLayoutComponent,CompanyManageCardComponent, CompanyMembersCardComponent, GroupManageCardComponent, ModalButtonComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {
  auth: Auth = {} as Auth;

  constructor(private authService: AuthService) {
    this.auth = this.authService.getAuth();
  }

}
