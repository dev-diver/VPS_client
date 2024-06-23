import { Component, Input } from '@angular/core';
import { Vacation, createDefaultVacation } from '../../interfaces/vacation';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { VacationService } from '../../services/vacation.service';

@Component({
  selector: 'app-dashboard-vacation-card',
  standalone: true,
  imports: [NzButtonModule,NzCardModule, CommonModule],
  templateUrl: './dashboard-vacation-card.component.html',
  styleUrl: './dashboard-vacation-card.component.less'
})
export class DashboardVacationCardComponent {
  @Input() contents : Vacation = createDefaultVacation();
  disabled = false;

  constructor(private vacationService : VacationService) {}

  ngOnInit() {
    if(this.contents.process_state == 4) {
      this.disabled = true
    }
  }

  onReject = () => {
    this.vacationService.rejectVacation(this.contents.id).then((data) => {
      this.contents.process_state = 4
      this.disabled = true
    })
  }

  onCancelReject = () => {
    this.vacationService.cancelRejectVacation(this.contents.id).then((data) => {
      this.contents.process_state = 1
      this.disabled = false
    })
  }

}
