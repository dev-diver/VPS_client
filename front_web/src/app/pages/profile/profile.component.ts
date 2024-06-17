import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { ProfileCardComponent } from '../../profile-card/profile-card.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PageLayoutComponent, ProfileCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {

}
