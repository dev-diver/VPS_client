import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { ModalAddButtonComponent } from '../../modal-add-button/modal-add-button.component';

@Component({
  selector: 'app-group-add-card',
  standalone: true,
  imports: [NzCardComponent, ModalAddButtonComponent],
  templateUrl: './group-add-card.component.html',
  styleUrl: './group-add-card.component.less'
})
export class GroupAddCardComponent {

}
