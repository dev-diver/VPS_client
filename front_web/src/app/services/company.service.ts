import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url = "http://localhost:3000/api/companies/2"

  async getCompanyInfo(): Promise<Company> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  constructor() { }
}
