import { Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CommonModule } from '@angular/common';
import { YearChangeComponent } from '../year-change/year-change.component';
import { DashboardVacationCardComponent } from '../dashboard-vacation-card/dashboard-vacation-card.component';
import { VacationInfo } from '../../interfaces/vacation-info';

@Component({
  selector: 'app-vacation-dashboard',
  standalone: true,
  imports: [DashboardVacationCardComponent, YearChangeComponent,CommonModule, NzCardModule, NzListModule],
  templateUrl: './vacation-dashboard.component.html',
  styleUrl: './vacation-dashboard.component.less',
  encapsulation: ViewEncapsulation.None
})
export class VacationDashboardComponent {
  @Input() year: number = new Date().getFullYear()
  data: { [key:number]: VacationInfo[]} = {
    2024: [
      {
        teamName: '개발팀',
        name: '소경현',
        startDatetime : new Date(),
        endDatetime : new Date(),
        process: true
      },
      {
        teamName: '개발팀',
        name: '김장겸',
        startDatetime : new Date(),
        endDatetime : new Date(),
        process: true
      },
    ]
  }

  requestSituation(): void {
    this.data[2023] = [
      {
        teamName: '개발팀',
        name: '박소영',
        startDatetime : new Date(),
        endDatetime : new Date(),
        process: true
      },
      {
        teamName: '개발팀',
        name: '김장겸',
        startDatetime : new Date(),
        endDatetime : new Date(),
        process: true
      },
      {
        teamName: '개발팀',
        name: '소경현',
        startDatetime : new Date(),
        endDatetime : new Date(),
        process: true
      },
    ]
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
