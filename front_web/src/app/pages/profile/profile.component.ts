import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {

}
