import { Component, Input } from '@angular/core';
import { VacationCardComponent } from '../../components/vacation-card/vacation-card.component';
import { GroupFilterComponent } from '../../components/group-manage-card/group-filter/group-filter.component';
import { VacationDashboardComponent } from '../../components/vacation-dashboard/vacation-dashboard.component';
import { ModalButtonComponent } from '../../components/modal-button/modal-button.component';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { ApplyVacationComponent } from '../../components/apply-vacation/apply-vacation.component';
import { YearChangeComponent } from '../../components/year-change/year-change.component';
import { ApplierVacationPlanComponent } from '../../components/applier-vacation-plan/applier-vacation-plan.component';
  @Component({
  selector: 'app-dashboard',
  standalone: true,
imports: [ApplierVacationPlanComponent,YearChangeComponent, ApplyVacationComponent,PageLayoutComponent, ModalButtonComponent, VacationCardComponent, GroupFilterComponent, VacationDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {
  @Input() year: number = new Date().getFullYear();
  
  onYearChange = (newYear: number): void  => {
    this.year = newYear;
  }
}
