import { Component, Input } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { Member } from '../interfaces/member';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [NzCardComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.less'
})
export class ProfileCardComponent {
  @Input() member: Member = {name: '소경현'}
}
