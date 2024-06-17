import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-vacation-progress-filter',
  standalone: true,
  imports: [NzDropDownModule, NzIconModule],
  templateUrl: './vacation-progress-filter.component.html',
  styleUrl: './vacation-progress-filter.component.less'
})
export class VacationProgressFilterComponent {

}
