import { Component, Input } from '@angular/core';
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

  companyInfo : Company = {} as Company;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanyInfo().then((data) => {
      this.companyInfo = data;
    })
  }

}
