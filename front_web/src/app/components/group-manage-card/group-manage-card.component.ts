import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { GroupAddCardComponent } from './group-add-card/group-add-card.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { Group } from '../../interfaces/group';
import { FoldingCardComponent } from '../folding-card/folding-card.component';

@Component({
  selector: 'app-group-manage-card',
  standalone: true,
  imports: [NzCardComponent, GroupAddCardComponent, GroupCardComponent, FoldingCardComponent],
  templateUrl: './group-manage-card.component.html',
  styleUrl: './group-manage-card.component.less'
})
export class GroupManageCardComponent {
  group : Group = {
    name : '개발팀',
    color : '#ffffff',
    members: [
      {
        name: '소경현',
        companyName: '싸이웰 시스템',
        email: 'valentine@cywell.co.kr',
        hireDate: new Date(2024,5,3),
        isActivate: true
      },
      {
        name: '김장겸',
        companyName: '싸이웰 시스템',
        email: 'jk@cywell.co.kr',
        hireDate: new Date(2022,3,3),
        isActivate: true
      }
    ]
  }
}
