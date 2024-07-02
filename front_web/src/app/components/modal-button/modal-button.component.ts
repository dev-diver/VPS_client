import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
@Component({
  selector: 'app-modal-button',
  standalone: true,
  imports: [NzTypographyModule, FormsModule, CommonModule, NzDatePickerModule, NzButtonModule, NzIconModule, NzModalModule],
  templateUrl: './modal-button.component.html',
  styleUrl: './modal-button.component.less'
})
export class ModalButtonComponent {
  @Input() title: string = '';

  @Input() nzFooter: any = [{
    label: '확인',
    type: 'primary',
    onClick: () => this.handleOk()
  }, {
    label: '취소',
    onClick: () => this.handleCancel()
  }];

  @Input() okHandler: () => Promise<void> = async () => {};
  @ContentChild('submitButton', {static: false}) customButton: ElementRef | undefined;

  hasCustomButton = false;
  errorMessage: string = '';

  isVisible = false;
  isOkLoading = false;

  ngAfterContentInit(): void {
    this.hasCustomButton = !!this.customButton;
  }
  
  showModal = () : void => {
    this.isVisible = true;
  }

  hideModal = (): void  => {
    console.log("hideModal")
    this.isVisible = false;
  }

  handleOk = async (): Promise<void> => {
    this.isOkLoading = true;
    try {
      await this.okHandler()
      this.isVisible = false;
    } catch (error : any) {
      if(error instanceof Error) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = '알 수 없는 에러';
      }
    } finally {
      this.isOkLoading = false;
    }
  }

  handleCancel = (): void => {
    this.isVisible = false;
  }

}
