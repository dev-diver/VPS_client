import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import { AxiosInstance } from 'axios';
import { Member } from '../interfaces/member';
import { ID } from '../interfaces/id';
import { Group } from '../interfaces/group';
import { AxiosInstanceService } from './axios-instance.service';
import { Organize } from '../interfaces/organize';
import { AuthService } from './auth.service';
import { Auth } from '../interfaces/auth';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  auth : Auth | null;
  companyId : ID;
  private axiosInstance: AxiosInstance;

  constructor(private authService: AuthService) {
    this.axiosInstance = new AxiosInstanceService().getAxiosInstance()
    this.auth = this.authService.getAuth();
    if(!this.auth){
      throw new Error('로그인이 필요합니다')
    }
    this.companyId = this.auth.company_id;
  }

  async getCompanyInfo(): Promise<Company> {
    const response = await this.axiosInstance.get<Company>(`/companies/${this.companyId}`);
    return response.data
  }

  async getCompanyMembers(): Promise<Member[]> {
    const response = await this.axiosInstance.get<Member[]>(`/companies/${this.companyId}/members`);
    return response.data
  }

  async getCompanyMembersWithKeyword(keyword : string): Promise<Member[]> {
    const response = await this.axiosInstance.get<Member[]>(`/companies/${this.companyId}/members/search?keyword=${keyword}`);
    return response.data
  }

  async getCompanyGroups(): Promise<Group[]> {
    const response = await this.axiosInstance.get<Group[]>(`/companies/${this.companyId}/groups`);
    return response.data
  }

  async getCompanyOrganizes(): Promise<Organize> {
    const response = await this.axiosInstance.get<Organize>(`/companies/${this.companyId}/organizes`);
    return response.data
  }
  
}
