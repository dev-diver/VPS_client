import { Component, Input } from '@angular/core';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PageLayoutComponent, ProfileCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {
  auth: Auth = {} as Auth;
  constructor(private authService: AuthService) {
    this.auth = this.authService.getAuth();
  }
}
