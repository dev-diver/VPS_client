import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import axios, { AxiosInstance } from 'axios';
import { Member } from '../interfaces/member';
import { environment } from '../../environments/environment';
import { ID } from '../interfaces/id';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    });
   }

  async getCompanyInfo(companyId : ID): Promise<Company> {
    const response = await this.axiosInstance.get<Company>(`/companies/${companyId}`);
    return response.data
  }

  async getCompanyMembers(companyId : ID): Promise<Member[]> {
    const response = await this.axiosInstance.get<Member[]>(`/companies/${companyId}/members`);
    return response.data
  }
  
}
