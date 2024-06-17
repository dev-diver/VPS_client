import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [NzGridModule],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.less'
})
export class PageLayoutComponent {

}
