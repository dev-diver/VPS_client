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

  async postVacationPlan(memberId :ID, vacations: VacationPlanResquest): Promise<VacationPlan> {
    const response = await this.axiosInstance.post(`/members/${memberId}/vacations/plans`, vacations);
    return response.data
  }
}
