import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import { Member } from '../interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url = "http://localhost:3000/api/companies/2"

  async getCompanyInfo(): Promise<Company> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCompanyMembers(): Promise<Member[]> {
    const data = await fetch(this.url + "/members");
    return await data.json() ?? [];
  }

  constructor() { }
}
