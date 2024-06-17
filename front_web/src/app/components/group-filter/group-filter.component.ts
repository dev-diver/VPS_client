import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-group-filter',
  standalone: true,
  imports: [NzDropDownModule, NzIconModule],
  templateUrl: './group-filter.component.html',
  styleUrl: './group-filter.component.less'
})
export class GroupFilterComponent {

}
