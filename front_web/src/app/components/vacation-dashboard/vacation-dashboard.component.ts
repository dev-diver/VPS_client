import { Component, Input,ViewEncapsulation } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CommonModule } from '@angular/common';
import { YearChangeComponent } from '../year-change/year-change.component';
import { ApproverVacationPlanCardComponent } from '../approver-vacation-plan/approver-vacation-plan-card/approver-vacation-plan-card.component';
import { ApplierVacationPlanComponent } from '../applier-vacation-plan/applier-vacation-plan.component';
import { ApproverVacationPlanComponent } from '../approver-vacation-plan/approver-vacation-plan.component';

@Component({
  selector: 'app-vacation-dashboard',
  standalone: true,
  imports: [ApproverVacationPlanComponent,ApplierVacationPlanComponent,ApproverVacationPlanCardComponent, YearChangeComponent,CommonModule, NzCardModule, NzListModule],
  templateUrl: './vacation-dashboard.component.html',
  styleUrl: './vacation-dashboard.component.less',
  encapsulation: ViewEncapsulation.None
})
export class VacationDashboardComponent {
  @Input() year: number = 0
  @Input() yearChange = (newYear:number): void => {}
}
