import { Injectable } from '@angular/core';
import { AxiosInstance } from 'axios';
import { ID } from '../interfaces/id';
import { VacationPlan } from '../interfaces/vacation-plan';
import { EditVacationPlan, VacationPlan as VacationPlanRequest } from '../interfaces/request/vacation-plan';
import { Vacation as VacationRequest } from '../interfaces/request/vacation';
import { ApprovalAuth } from '../interfaces/approval-auth';
import { AxiosInstanceService } from './axios-instance.service';
import { Vacation } from '../interfaces/vacation';
import { Auth } from '../interfaces/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  auth : Auth | null;
  companyId : ID;
  memberId : ID;
  private axiosInstance: AxiosInstance;

  constructor(private authService: AuthService) {
    this.axiosInstance = new AxiosInstanceService().getAxiosInstance()
    this.auth = this.authService.getAuth();
    if(!this.auth){
      throw new Error('로그인이 필요합니다')
    }
    this.companyId = this.auth.company_id;
    this.memberId = this.auth.member.id;
  }

  async getCompanyVacationPlansWithYear(year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/companies/${this.companyId}/vacations/plans?year=${year}`);
    return response.data
  }

  async getMemberVacationPlansWithYear(year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/members/${this.memberId}/vacations/plans?year=${year}`);
    console.log(response.data)
    return response.data
  }

  async getApproverVacationPlansWithYear(year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/vacations/plans?approverID=${this.memberId}&year=${year}`);
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

  async postVacationPlan(vacations: VacationPlanRequest): Promise<VacationPlan> {
    const response = await this.axiosInstance.post(`/members/${this.memberId}/vacations/plans`, vacations);
    return response.data
  }

  async changeVacationPlan(vacationPlanId: ID, editVacationPlan: EditVacationPlan): Promise<VacationPlan> {
    const response = await this.axiosInstance.patch(`/vacations/plans/${vacationPlanId}`, editVacationPlan);
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

  async cancelApproveVacationPlan(vacationPlanId: ID, approvalAuth : ApprovalAuth): Promise<void> {
    const response = await this.axiosInstance.post(`/vacations/plans/${vacationPlanId}/cancel-approve`, approvalAuth);
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
