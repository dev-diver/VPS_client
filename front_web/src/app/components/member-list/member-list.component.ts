import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NameTagComponent } from '../name-tag/name-tag.component';
import { Member } from '../../interfaces/member';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzWrap } from 'ng-zorro-antd/flex';
import { ID } from '../../interfaces/id';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule,NzFlexModule, NzCardModule, NzListModule, NameTagComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.less'
})
export class MemberListComponent {
  @Input() members: Member[] = []
  @Input() onMemberSelected: (member: Member) => void = () => {}
  
  highlightId: ID = 0

  onMouseOver(item: Member) {
    this.highlightId = item.id
  }

  onMouseLeave() {
    this.highlightId = 0
  }
}
