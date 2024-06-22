import { Component, inject } from '@angular/core';
import { Company } from '../../interfaces/company';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.less'
})
export class CompanyCardComponent {

  companyInfo : Company = {
    name :'',
    accounting_day: new Date(),
    vacation_generate_type_name: '',
    vacation_generate_type_description: ''
  }
  companyService : CompanyService = inject(CompanyService)
  constructor() {
    this.companyService.getCompanyInfo().then((data) => {
      this.companyInfo = data;
    })
  }

}
