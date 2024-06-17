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
    member: [
      {
        name:'소경현'
      },
      {
        name:'김장겸'
      }
    ]
  }
}
