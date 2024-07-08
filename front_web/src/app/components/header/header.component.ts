import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router, RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzBadgeModule, NzAvatarModule,NzIconModule,NzFlexModule,NzGridModule,NzMenuModule, RouterModule, NzButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  authInfo: Auth | null = null;
  notificationCount : number = 1;
  private authSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.authSubscription = this.authService.getAuth().subscribe((authInfo) => {
      this.authInfo = authInfo;
    });
  }

  logout(){
    this.authService.logout();
  }

  ngOnDestroy() {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }
}
