import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-add-company-button',
  standalone: true,
  imports: [NzIconModule, NzButtonModule],
  templateUrl: './add-company-button.component.html',
  styleUrl: './add-company-button.component.less'
})
export class AddCompanyButtonComponent {

}
