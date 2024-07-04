import { Component, Input } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FoldingCardComponent } from '../folding-card/folding-card.component';
import { Member } from '../../interfaces/member';
import { CompanyService } from '../../services/company.service';
import { Auth } from '../../interfaces/auth';
import { MemberListComponent } from '../member-list/member-list.component';

@Component({
  selector: 'app-company-members-card',
  standalone: true,
  imports: [
    NzCardComponent, ModalButtonComponent, NzIconModule,NzListModule, NzGridModule, 
    FoldingCardComponent, MemberListComponent
  ],
  templateUrl: './company-members-card.component.html',
  styleUrl: './company-members-card.component.less'
})

export class CompanyMembersCardComponent {

  members : Member[] = []

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanyMembers().then((data) => {
      this.members = data;
    })
  }

}
