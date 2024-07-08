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

  constructor(private authService: AuthService, private axiosInstanceService: AxiosInstanceService) {
    this.axiosInstance = this.axiosInstanceService.getAxiosInstance()
    this.authSubscription = this.authService.getAuth().subscribe(authInfo => {
      this.auth = authInfo;
      if(authInfo){
        this.companyId = authInfo.company_id;
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
