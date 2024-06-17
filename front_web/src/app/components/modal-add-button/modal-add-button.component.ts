import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-modal-add-button',
  standalone: true,
  imports: [NzButtonModule, NzIconModule],
  templateUrl: './modal-add-button.component.html',
  styleUrl: './modal-add-button.component.less'
})
export class ModalAddButtonComponent {

}
