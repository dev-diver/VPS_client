import { Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CommonModule } from '@angular/common';
import { YearChangeComponent } from '../year-change/year-change.component';
import { DashboardVacationPlanCardComponent } from '../dashboard-vacation-plan-card/dashboard-vacation-plan-card.component';
import { VacationPlan } from '../../interfaces/vacation-plan';

@Component({
  selector: 'app-vacation-dashboard',
  standalone: true,
  imports: [DashboardVacationPlanCardComponent, YearChangeComponent,CommonModule, NzCardModule, NzListModule],
  templateUrl: './vacation-dashboard.component.html',
  styleUrl: './vacation-dashboard.component.less',
  encapsulation: ViewEncapsulation.None
})
export class VacationDashboardComponent {
  @Input() year: number = new Date().getFullYear()
  data: VacationPlan[] = [
    {
      id: 1,
      member_id: 1,
      member_name: '소경현',
      apply_date: new Date(),
      approve_date: new Date(),
      vacations: [
        {
          teamName: '개발팀',
          name: '소경현',
          startDatetime : new Date(),
          endDatetime : new Date(),
          process: true
        }
      ],
      process_state: 1,
      cancel_state: 1
    }
  ]

  requestSituation(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['year']){
      this.requestSituation();
    }
  }

  decreaseYear = () => {
    this.year-=1
  }

  increaseYear = () => {
    this.year+=1
  }

}
