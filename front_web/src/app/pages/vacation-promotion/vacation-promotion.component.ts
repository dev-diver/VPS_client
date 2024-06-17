import { Component } from '@angular/core';
import { VacationProgressFilterComponent } from '../../components/vacation-progress-filter/vacation-progress-filter.component';
import { VacationPromotionDashboardComponent } from '../../components/vacation-promotion-dashboard/vacation-promotion-dashboard.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-vacation-promotion',
  standalone: true,
  imports: [VacationProgressFilterComponent, VacationPromotionDashboardComponent, NzGridModule],
  templateUrl: './vacation-promotion.component.html',
  styleUrl: './vacation-promotion.component.less'
})
export class VacationPromotionComponent {

}
