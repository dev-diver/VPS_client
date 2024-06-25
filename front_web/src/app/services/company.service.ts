import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import { AxiosInstance } from 'axios';
import { Member } from '../interfaces/member';
import { ID } from '../interfaces/id';
import { Group } from '../interfaces/group';
import { AxiosInstanceService } from './axios-instance.service';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = new AxiosInstanceService().getAxiosInstance()
  }

  async getCompanyInfo(companyId : ID): Promise<Company> {
    const response = await this.axiosInstance.get<Company>(`/companies/${companyId}`);
    return response.data
  }

  async getCompanyMembers(companyId : ID): Promise<Member[]> {
    const response = await this.axiosInstance.get<Member[]>(`/companies/${companyId}/members`);
    return response.data
  }

  async getCompanyMembersWithKeyword(companyId : ID, keyword : string): Promise<Member[]> {
    const response = await this.axiosInstance.get<Member[]>(`/companies/${companyId}/members/search?${keyword}`);
    return response.data
  }

  async getCompanyGroups(companyId : ID): Promise<Group[]> {
    const response = await this.axiosInstance.get<Group[]>(`/companies/${companyId}/groups`);
    return response.data
  }
  
}
