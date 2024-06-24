import { Component, Input } from '@angular/core';
import { Company } from '../../interfaces/company';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { Auth } from '../../interfaces/auth';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.less'
})
export class CompanyCardComponent {

  @Input() auth : Auth = {} as Auth;
  companyInfo : Company = {} as Company;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanyInfo(this.auth.company_id).then((data) => {
      this.companyInfo = data;
    })
  }

}
