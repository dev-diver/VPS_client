import { Injectable } from '@angular/core';
import { AxiosInstance } from 'axios';
import { ID } from '../interfaces/id';
import { VacationPlan } from '../interfaces/vacation-plan';
import { VacationPlan as VacationPlanRequest } from '../interfaces/request/vacation-plan';
import { Vacation as VacationRequest } from '../interfaces/request/vacation';
import { ApprovalAuth } from '../interfaces/approval-auth';
import { AxiosInstanceService } from './axios-instance.service';
import { Vacation } from '../interfaces/vacation';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = new AxiosInstanceService().getAxiosInstance()
  }

  async getCompanyVacationPlansWithYear(companyId :ID, year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/companies/${companyId}/vacations/plans?year=${year}`);
    console.log(response.data)
    return response.data
  }

  async getMemberVacationPlansWithYear(memberId :ID, year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/members/${memberId}/vacations/plans?year=${year}`);
    console.log(response.data)
    return response.data
  }

  async getApproverVacationPlansWithYear(memberId :ID, year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/vacations/plans?approverID=${memberId}&year=${year}`);
    console.log(response.data)
    return response.data
  }

  async getVacationPlanById(vacationPlanId: ID): Promise<VacationPlan> {
    const response = await this.axiosInstance.get(`/vacations/plans/${vacationPlanId}`);
    return response.data
  }

  async getVacationById(vacationId: ID): Promise<Vacation> {
    const response = await this.axiosInstance.get(`/vacations/${vacationId}`);
    return response.data
  }

  async postVacationPlan(memberId :ID, vacations: VacationPlanRequest): Promise<VacationPlan> {
    const response = await this.axiosInstance.post(`/members/${memberId}/vacations/plans`, vacations);
    return response.data
  }

  async changeVacationPlan(vacationPlanId: ID): Promise<VacationPlan> {
    const response = await this.axiosInstance.patch(`/vacations/plans/${vacationPlanId}`);
    return response.data
  }

  async cancelVacationPlan(vacationPlanId: ID): Promise<void> {
    const response = await this.axiosInstance.delete(`/vacations/plans/${vacationPlanId}`);
    return response.data
  }

  async changeVacation(vacationId: ID, vacation: VacationRequest): Promise<Vacation> {
    const response = await this.axiosInstance.post(`/vacations/${vacationId}`, vacation);
    return response.data
  }

  async cancelVacation(vacationId: ID): Promise<void> {
    const response = await this.axiosInstance.delete(`/vacations/${vacationId}`);
    return response.data
  }

  async approveVacationPlan(vacationPlanId: ID, approvalAuth : ApprovalAuth): Promise<void> {
    console.log(approvalAuth)
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
