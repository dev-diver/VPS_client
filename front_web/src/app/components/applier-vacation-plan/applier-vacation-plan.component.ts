import { Component, Input, SimpleChanges } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { VacationPlan } from '../../interfaces/vacation-plan';
import { VacationService } from '../../services/vacation.service';
import { ApplierVacationPlanCardComponent } from './applier-vacation-plan-card/applier-vacation-plan-card.component';

type Mode = 'process' | 'rejected'
@Component({
  selector: 'app-applier-vacation-plan',
  standalone: true,
  imports: [ApplierVacationPlanCardComponent, NzListModule],
  templateUrl: './applier-vacation-plan.component.html',
  styleUrl: './applier-vacation-plan.component.less'
})
export class ApplierVacationPlanComponent {

  @Input() year: number = 0
  @Input() mode: Mode = 'process'
  data: VacationPlan[] = []

  constructor(private vacationService : VacationService) { }

  requestPeriodVacationPlans = () : void => {
    if(this.mode === 'process'){
      this.vacationService.getMemberVacationPlansWithYear(this.year).then((data) => {
        this.data = data
      })
    } else if(this.mode === 'rejected'){
      this.vacationService.getRejectedVacationPlansWithYear(this.year).then((data) => {
        this.data = data
      })
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['year']) {
      this.requestPeriodVacationPlans();
    }
  }

  replaceVacationPlan = (id: number): void => {
    this.vacationService.getVacationPlanById(id).then(updatedVacationPlan => {
      const index = this.data.findIndex(v => v.id === id);
      if (index !== -1) {
        this.data[index] = updatedVacationPlan;
      }
    });
  }

  deleteVacationPlan = (id: number): void => {
    const index = this.data.findIndex(v => v.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}
