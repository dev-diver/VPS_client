import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { ModalButtonComponent } from '../../modal-button/modal-button.component';

@Component({
  selector: 'app-group-add-card',
  standalone: true,
  imports: [NzCardComponent, ModalButtonComponent],
  templateUrl: './group-add-card.component.html',
  styleUrl: './group-add-card.component.less'
})
export class GroupAddCardComponent {

}
