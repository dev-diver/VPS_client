import { Component } from '@angular/core';
import { ModalAddButtonComponent } from '../modal-add-button/modal-add-button.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply-vacation',
  standalone: true,
  imports: [FormsModule, ModalAddButtonComponent, NzDatePickerModule, CommonModule],
  templateUrl: './apply-vacation.component.html',
  styleUrl: './apply-vacation.component.less'
})
export class ApplyVacationComponent {
  dateRange: Date[] = [];
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
    // 비동기 작업을 수행
    await this.simulateAsyncOperation();
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
