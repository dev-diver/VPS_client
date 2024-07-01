import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Organize } from '../../../interfaces/organize';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from '../../member-list/member-list.component';
import { FoldingCardComponent } from '../../folding-card/folding-card.component';
import { Member } from '../../../interfaces/member';

@Component({
  selector: 'app-select-organize-card',
  standalone: true,
  imports: [
    CommonModule,NzCardModule,
    MemberListComponent, FoldingCardComponent
  ],
  templateUrl: './select-organize-card.component.html',
  styleUrl: './select-organize-card.component.less'
})
export class SelectOrganizeCardComponent {
  @Input() organize: Organize = {} as Organize;
  @Input() onMemberSelected: (member: Member) => void = () => {};
}
