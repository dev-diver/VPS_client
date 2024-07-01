import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { Organize } from '../../interfaces/organize';
import { OrganizeCardComponent } from './organize-card/organize-card.component';

@Component({
  selector: 'app-organize-map',
  standalone: true,
  imports: [OrganizeCardComponent],
  templateUrl: './organize-map.component.html',
  styleUrl: './organize-map.component.less'
})
export class OrganizeMapComponent {

  auth : Auth =  {} as Auth
  organize : Organize = {} as Organize

  constructor(private authService: AuthService, private companyService: CompanyService) {
    this.auth = this.authService.getAuth()
    this.companyService.getCompanyOrganizes(this.auth.company_id).then((organizes) => {
      this.organize = organizes
      console.log(this.organize)
    })
  }
}
