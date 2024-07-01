import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { Organize } from '../../interfaces/organize';

@Component({
  selector: 'app-organize-map',
  standalone: true,
  imports: [],
  templateUrl: './organize-map.component.html',
  styleUrl: './organize-map.component.less'
})
export class OrganizeMapComponent {

  Auth : Auth =  {} as Auth
  Organizes : Organize[] = []

  constructor(private authService: AuthService, private companyService: CompanyService) {
    this.Auth = this.authService.getAuth()
    this.companyService.getCompanyOrganizes(this.Auth.company_id).then((organizes) => {
      this.Organizes = organizes
      console.log(this.Organizes)
    })
  }
}
