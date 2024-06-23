import { Component, Input } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { GroupAddCardComponent } from './group-add-card/group-add-card.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { Group } from '../../interfaces/group';
import { FoldingCardComponent } from '../folding-card/folding-card.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-group-manage-card',
  standalone: true,
  imports: [NzGridModule, NzListModule,  NzCardComponent, GroupAddCardComponent, GroupCardComponent, FoldingCardComponent],
  templateUrl: './group-manage-card.component.html',
  styleUrl: './group-manage-card.component.less'
})
export class GroupManageCardComponent {

  @Input() companyId : number = 0
  groups : Group[] = []

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanyGroups(this.companyId).then((data) => {
      this.groups = data;
    })
  }
}
