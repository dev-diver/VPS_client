import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [NzCardModule, NzListModule],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.less'
})
export class NotificationCardComponent {
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
}