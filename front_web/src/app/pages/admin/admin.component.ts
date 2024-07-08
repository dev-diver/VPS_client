import { Component } from '@angular/core';
import { CompanyManageCardComponent } from '../../components/company-manage-card/company-manage-card.component';
import { CompanyMembersCardComponent } from '../../components/company-members-card/company-members-card.component';
import { ModalButtonComponent } from '../../components/modal-button/modal-button.component';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { FoldingCardComponent } from '../../components/folding-card/folding-card.component';
import { CompanyCardComponent } from '../../components/company-card/company-card.component';
import { OrganizeMapComponent } from '../../components/organize-map/organize-map.component';
import { UpdateButtonsComponent } from '../../components/update-buttons/update-buttons.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CompanyCardComponent, FoldingCardComponent,PageLayoutComponent, CompanyManageCardComponent, CompanyMembersCardComponent, OrganizeMapComponent, ModalButtonComponent,
    UpdateButtonsComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {
}
