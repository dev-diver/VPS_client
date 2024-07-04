import { Component, Input } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Organize } from '../../interfaces/organize';
import { SelectOrganizeCardComponent } from './select-organize-card/select-organize-card.component';
import { Member } from '../../interfaces/member';

@Component({
  selector: 'app-organize-map',
  standalone: true,
  imports: [SelectOrganizeCardComponent],
  templateUrl: './organize-map.component.html',
  styleUrl: './organize-map.component.less'
})
export class OrganizeMapComponent {

  organize : Organize = {} as Organize
  @Input() onSelectMember: (member: Member) => void = () => {}

  constructor(private companyService: CompanyService) {
    this.companyService.getCompanyOrganizes().then((organizes) => {
      this.organize = organizes
      console.log(this.organize)
    })
  }
}
