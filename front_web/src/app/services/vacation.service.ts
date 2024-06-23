import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';
import { ID } from '../interfaces/id';
import { VacationPlan } from '../interfaces/vacation-plan';
import { VacationPlan as VacationPlanResquest } from '../interfaces/request/vacation-plan';

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

  async postVacationPlan(memberId :ID, vacations: VacationPlanResquest): Promise<VacationPlan> {
    const response = await this.axiosInstance.post(`/members/${memberId}/vacations/plans`, vacations);
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
