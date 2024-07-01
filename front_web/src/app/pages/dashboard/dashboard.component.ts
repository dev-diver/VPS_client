import { Component, Input } from '@angular/core';
import { VacationCardComponent } from '../../components/vacation-card/vacation-card.component';
import { GroupFilterComponent } from '../../components/group-manage-card/group-filter/group-filter.component';
import { VacationDashboardComponent } from '../../components/vacation-dashboard/vacation-dashboard.component';
import { ModalAddButtonComponent } from '../../components/modal-add-button/modal-add-button.component';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { ApplyVacationComponent } from '../../components/apply-vacation/apply-vacation.component';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { YearChangeComponent } from '../../components/year-change/year-change.component';
import { ApplierVacationPlanComponent } from '../../components/applier-vacation-plan/applier-vacation-plan.component';
  @Component({
  selector: 'app-dashboard',
  standalone: true,
imports: [ApplierVacationPlanComponent,YearChangeComponent, ApplyVacationComponent,PageLayoutComponent, ModalAddButtonComponent, VacationCardComponent, GroupFilterComponent, VacationDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {
  @Input() year: number = new Date().getFullYear();
  
  auth: Auth = {} as Auth;
  constructor(private authService: AuthService) {
    this.auth = this.authService.getAuth();
  }

  onYearChange = (newYear: number): void  => {
    this.year = newYear;
  }
}
