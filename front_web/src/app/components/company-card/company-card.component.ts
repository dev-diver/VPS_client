import { Component, Input, inject } from '@angular/core';
import { Company } from '../../interfaces/company';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { ID } from '../../interfaces/id';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.less'
})
export class CompanyCardComponent {

  @Input() companyId : ID = 0;

  companyInfo : Company = {
    name :'',
    accounting_day: new Date(),
    vacation_generate_type_name: '',
    vacation_generate_type_description: ''
  };

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanyInfo(this.companyId).then((data) => {
      this.companyInfo = data;
    })
  }


}
