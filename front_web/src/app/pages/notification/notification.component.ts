import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { NotificationCardComponent } from '../../notification-card/notification-card.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NotificationCardComponent,PageLayoutComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.less'
})
export class NotificationComponent {

}
