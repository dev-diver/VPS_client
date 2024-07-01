import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Organize } from '../../../interfaces/organize';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from '../../member-list/member-list.component';

@Component({
  selector: 'app-organize-card',
  standalone: true,
  imports: [CommonModule,NzCardModule,MemberListComponent],
  templateUrl: './organize-card.component.html',
  styleUrl: './organize-card.component.less'
})
export class OrganizeCardComponent {
  @Input() organize: Organize = {} as Organize;
}
