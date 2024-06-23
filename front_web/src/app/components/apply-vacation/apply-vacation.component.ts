import { Component, Input } from '@angular/core';
import { ModalAddButtonComponent } from '../modal-add-button/modal-add-button.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VacationService } from '../../services/vacation.service';
import { ID } from '../../interfaces/id';

@Component({
  selector: 'app-apply-vacation',
  standalone: true,
  imports: [FormsModule, ModalAddButtonComponent, NzDatePickerModule, CommonModule],
  templateUrl: './apply-vacation.component.html',
  styleUrl: './apply-vacation.component.less'
})
export class ApplyVacationComponent {
  
  @Input() memberId : ID = 3;
  dateRange: Date[] = [];

  constructor(private vacationService : VacationService) { }

  onChange(result: Date[]): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onCalendarChange(result: Array<Date | null>): void {
    console.log('onCalendarChange', result);
  }

  handleOk = async () : Promise<void> => {
    await this.vacationService.postVacationPlan(this.memberId, {
      approver_1 : 1,
      approver_final : 2,
      vacations: [
        {
          start_date: this.dateRange[0],
          end_date: this.dateRange[1],
          half_first: false,
          half_last: false,
          vacation_type: 1
        }
      ]
    });
  }

  private simulateAsyncOperation = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(this.dateRange)
        console.log('Async operation completed');
        resolve();
      }, 2000);
    });
  }
}
