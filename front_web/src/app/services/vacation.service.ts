import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';
import { ID } from '../interfaces/id';
import { VacationPlan } from '../interfaces/vacation-plan';
import { VacationPlan as VacationPlanRequest } from '../interfaces/request/vacation-plan';
import { ApprovalAuth } from '../interfaces/approval-auth';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  private axiosInstance: AxiosInstance;

  constructor() { 
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async getCompanyVacationPlanWithYear(companyId :ID, year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/companies/${companyId}/vacations/plans?year=${year}`);
    return response.data
  }

  async postVacationPlan(memberId :ID, vacations: VacationPlanRequest): Promise<VacationPlan> {
    const response = await this.axiosInstance.post(`/members/${memberId}/vacations/plans`, vacations);
    return response.data
  }

  async approveVacationPlan(vacationPlanId: ID, approvalAuth : ApprovalAuth): Promise<void> {
    const response = await this.axiosInstance.post(`/vacations/plans/${vacationPlanId}/approve`, approvalAuth);
    console.log(response.data)
    return response.data
  }

  async rejectVacationPlan(vacationPlanId: ID, approvalAuth : ApprovalAuth): Promise<void> {
    const response = await this.axiosInstance.post(`/vacations/plans/${vacationPlanId}/reject`, approvalAuth);
    console.log(response.data)
    return response.data
  }

  async cancelRejectVacationPlan(vacationPlanId: ID, approvalAuth : ApprovalAuth): Promise<void> {
    const response = await this.axiosInstance.post(`/vacations/plans/${vacationPlanId}/cancel-reject`, approvalAuth);
    console.log(response.data)
    return response.data
  }

  async rejectVacation(vacationId: ID): Promise<void> {
    const response = await this.axiosInstance.post(`/vacations/${vacationId}/reject`)
    return response.data
  }

  async cancelRejectVacation(vacationId: ID): Promise<void> {
    const response = await this.axiosInstance.post(`/vacations/${vacationId}/cancel-reject`)
    return response.data
  }
}
