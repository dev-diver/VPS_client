import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzBadgeModule, NzAvatarModule,NzIconModule,NzFlexModule,NzGridModule,NzMenuModule, RouterModule, NzButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  auth: Auth = {} as Auth;
  showNavigate: boolean = true;
  notificationCount : number = 1;
  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.auth = this.authService.auth;
        this.showNavigate = event.url !== '/login';
      }
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
