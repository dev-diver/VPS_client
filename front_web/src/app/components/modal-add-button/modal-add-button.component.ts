import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-modal-add-button',
  standalone: true,
  imports: [FormsModule, CommonModule, NzDatePickerModule, NzButtonModule, NzIconModule, NzModalModule],
  templateUrl: './modal-add-button.component.html',
  styleUrl: './modal-add-button.component.less'
})
export class ModalAddButtonComponent {
  @Input() title: string = '';
  @Input() okHandler: () => Promise<void> = async () => {};
  isVisible = false;
  isOkLoading = false;
  
  showModal(): void {
    this.isVisible = true;
  }

  async handleOk(): Promise<void> {
    this.isOkLoading = true;
    try {
      await this.okHandler()
    } catch (error) {
      console.error('Error during handleOk', error);
    } finally {
      this.isVisible = false;
      this.isOkLoading = false;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
