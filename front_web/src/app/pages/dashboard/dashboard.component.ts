import { Component, Input } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { VacationCardComponent } from '../../components/vacation-card/vacation-card.component';
import { GroupFilterComponent } from '../../components/group-manage-card/group-filter/group-filter.component';
import { VacationDashboardComponent } from '../../components/vacation-dashboard/vacation-dashboard.component';
import { ModalAddButtonComponent } from '../../components/modal-add-button/modal-add-button.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ModalAddButtonComponent,NzGridModule, VacationCardComponent, GroupFilterComponent, VacationDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {
  @Input() year: number = new Date().getFullYear()
}
