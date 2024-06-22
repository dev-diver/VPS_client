import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import { Member } from '../interfaces/member';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = environment.apiUrl;

  async getCompanyInfo(): Promise<Company> {
    console.log("production", environment.production)
    const data = await fetch(`${this.baseUrl}/companies/2`);
    return await data.json() ?? [];
  }

  async getCompanyMembers(): Promise<Member[]> {
    const data = await fetch(`${this.baseUrl}/companies/2` + "/members");
    return await data.json() ?? [];
  }

  constructor() { }
}
