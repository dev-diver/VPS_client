import { Component, Input } from '@angular/core';
import { VacationCardComponent } from '../../components/vacation-card/vacation-card.component';
import { GroupFilterComponent } from '../../components/group-manage-card/group-filter/group-filter.component';
import { VacationDashboardComponent } from '../../components/vacation-dashboard/vacation-dashboard.component';
import { ModalButtonComponent } from '../../components/modal-button/modal-button.component';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { ApplyVacationComponent } from '../../components/apply-vacation/apply-vacation.component';
import { YearChangeComponent } from '../../components/year-change/year-change.component';
import { ApproverVacationPlanComponent } from '../../components/approver-vacation-plan/approver-vacation-plan.component';
@Component({
  selector: 'app-approve',
  standalone: true,
  imports: [ApproverVacationPlanComponent,YearChangeComponent,ApplyVacationComponent,PageLayoutComponent, ModalButtonComponent, VacationCardComponent, GroupFilterComponent, VacationDashboardComponent],
  templateUrl: './approve.component.html',
  styleUrl: './approve.component.less'
})

export class ApproveComponent {
  @Input() year: number = new Date().getFullYear();
  
  onYearChange = (newYear: number): void  => {
    this.year = newYear;
  }
}
