import { Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CommonModule } from '@angular/common';
import { YearChangeComponent } from '../year-change/year-change.component';
import { DashboardVacationPlanCardComponent } from '../dashboard-vacation-plan-card/dashboard-vacation-plan-card.component';
import { VacationPlan } from '../../interfaces/vacation-plan';
import { VacationService } from '../../services/vacation.service';
import { ID } from '../../interfaces/id';
import { Auth } from '../../interfaces/auth';

@Component({
  selector: 'app-vacation-dashboard',
  standalone: true,
  imports: [DashboardVacationPlanCardComponent, YearChangeComponent,CommonModule, NzCardModule, NzListModule],
  templateUrl: './vacation-dashboard.component.html',
  styleUrl: './vacation-dashboard.component.less',
  encapsulation: ViewEncapsulation.None
})
export class VacationDashboardComponent {
  @Input() auth : Auth = {} as Auth
  @Input() year: number = 0
  @Input() yearChange = (newYear:number): void => {}
  data: VacationPlan[] = []

  constructor(private vacationService : VacationService) { }

  requestPeriodVacationPlans = () : void => {
    this.vacationService.getCompanyVacationPlansWithYear(this.auth.company_id, this.year).then((data) => {
      this.data = data
    })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['companyId'] || changes['year']) {
      this.requestPeriodVacationPlans();
    }
  }

}
