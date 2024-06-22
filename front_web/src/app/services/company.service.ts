import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import axios, { AxiosInstance } from 'axios';
import { Member } from '../interfaces/member';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private axiosInstance: AxiosInstance;
  private baseUrl = environment.apiUrl;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    });
   }

  async getCompanyInfo(): Promise<Company> {
    const response = await this.axiosInstance.get<Company>(`/companies/2`);
    return response.data
  }

  async getCompanyMembers(): Promise<Member[]> {
    const response = await this.axiosInstance.get<Member[]>(`/companies/2/members`);
    return response.data
  }

  
}
