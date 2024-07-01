import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NameTagComponent } from '../name-tag/name-tag.component';
import { Member } from '../../interfaces/member';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzWrap } from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [NzFlexModule, NzCardModule, NzListModule, NameTagComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.less'
})
export class MemberListComponent {
  @Input() members: Member[] = []
}
