import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { Organize } from '../../interfaces/organize';
import { SelectOrganizeCardComponent } from '../organize-map/select-organize-card/select-organize-card.component';
import { Member } from '../../interfaces/member';
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-organize-map-form',
  standalone: true,
  imports: [
    NzButtonModule,
    SelectOrganizeCardComponent, ModalButtonComponent
  ],
  templateUrl: './organize-map-form.component.html',
  styleUrl: './organize-map-form.component.less'
})
export class OrganizeMapFormComponent {

  auth : Auth =  {} as Auth
  organize : Organize = {} as Organize
  @Input() selectHandler: (member: Member) => void = () => {}
  @Output() memberSelected = new EventEmitter<Member>()

  @ViewChild('modalButton') modalButton!: ModalButtonComponent;

  constructor(
    private authService: AuthService, 
    private companyService: CompanyService,
  ) {
    this.auth = this.authService.getAuth()
    this.companyService.getCompanyOrganizes(this.auth.company_id).then((organizes) => {
      this.organize = organizes
    })
  }

  onSelectMember = (member: Member): void  => {
    console.log(member)
    this.selectHandler(member)
    this.modalButton.hideModal()
  }
}
