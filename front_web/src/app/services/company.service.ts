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
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private auth : Auth | null = null;
  private companyId : ID = 0;
  private axiosInstance: AxiosInstance;
  private authSubscription: Subscription

  constructor(private authService: AuthService) {
    this.axiosInstance = new AxiosInstanceService().getAxiosInstance()
    this.authSubscription = this.authService.auth$.subscribe(auth => {
      this.auth = auth;
      if(auth){
        this.companyId = auth.company_id;
      }else {
        this.companyId = 0;
      }
    })
  }

  ngOnDestroy(): void {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

  private checkAuth() {
    if (!this.auth) {
      throw new Error('로그인이 필요합니다');
    }
    if (this.companyId==0) {
      throw new Error('회사 ID를 찾을 수 없습니다');
    }
  }

  async getCompanyInfo(): Promise<Company> {
    this.checkAuth();
    const response = await this.axiosInstance.get<Company>(`/companies/${this.companyId}`);
    return response.data
  }

  async getCompanyMembers(): Promise<Member[]> {
    this.checkAuth();
    const response = await this.axiosInstance.get<Member[]>(`/companies/${this.companyId}/members`);
    return response.data
  }

  async getCompanyMembersWithKeyword(keyword : string): Promise<Member[]> {
    this.checkAuth();
    const response = await this.axiosInstance.get<Member[]>(`/companies/${this.companyId}/members/search?keyword=${keyword}`);
    return response.data
  }

  async getCompanyGroups(): Promise<Group[]> {
    this.checkAuth();
    const response = await this.axiosInstance.get<Group[]>(`/companies/${this.companyId}/groups`);
    return response.data
  }

  async getCompanyOrganizes(): Promise<Organize> {
    this.checkAuth();
    const response = await this.axiosInstance.get<Organize>(`/companies/${this.companyId}/organizes`);
    return response.data
  }
  
}
