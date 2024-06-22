import { Component, Input, inject } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { ModalAddButtonComponent } from '../modal-add-button/modal-add-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NameTagComponent } from '../name-tag/name-tag.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FoldingCardComponent } from '../folding-card/folding-card.component';
import { Member } from '../../interfaces/member';
import { CompanyService } from '../../services/company.service';
import { ID } from '../../interfaces/id';

@Component({
  selector: 'app-company-members-card',
  standalone: true,
  imports: [NzCardComponent, ModalAddButtonComponent, NzIconModule, NameTagComponent, NzListModule, NzGridModule, FoldingCardComponent],
  templateUrl: './company-members-card.component.html',
  styleUrl: './company-members-card.component.less'
})

export class CompanyMembersCardComponent {

  @Input() companyId : ID = 0;
  members : Member[] = []

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanyMembers(this.companyId).then((data) => {
      this.members = data;
    })
  }

}
