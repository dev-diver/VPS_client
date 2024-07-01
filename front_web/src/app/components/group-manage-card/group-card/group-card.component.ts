import { Component, Input } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NameTagComponent } from '../../name-tag/name-tag.component';
import { GroupTagComponent } from '../group-tag/group-tag.component';
import { Group } from '../../../interfaces/group';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ModalButtonComponent } from '../../modal-button/modal-button.component';

@Component({
  selector: 'app-group-card',
  standalone: true,
  imports: [ModalButtonComponent,NzListModule, NzGridModule, NameTagComponent, NzListModule, GroupTagComponent, NzCardModule],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.less'
})
export class GroupCardComponent {
  @Input() group :Group = {name:'', color:'', members:[]}
}
