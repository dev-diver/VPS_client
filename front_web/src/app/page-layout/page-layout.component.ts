import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [NzGridModule, NzCardModule],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.less'
})
export class PageLayoutComponent {

}
