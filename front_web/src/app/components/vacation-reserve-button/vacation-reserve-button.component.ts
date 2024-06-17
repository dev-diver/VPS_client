import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-vacation-reserve-button',
  standalone: true,
  imports: [NzButtonModule, NzIconModule],
  templateUrl: './vacation-reserve-button.component.html',
  styleUrl: './vacation-reserve-button.component.less'
})
export class VacationReserveButtonComponent {

}
