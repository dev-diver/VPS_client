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
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  private auth : Auth | null = null;
  private companyId : ID = 0;
  private memberId : ID = 0;
  private axiosInstance: AxiosInstance;
  private authSubscription: Subscription
  private vacationRefresh = new BehaviorSubject<void>(undefined);
  vacationRefresh$ = this.vacationRefresh.asObservable();

  notifyVacationReferesh = () => {
    this.vacationRefresh.next()
  }

  constructor(private authService: AuthService, private axiosInstanceService: AxiosInstanceService) {
    this.axiosInstance = this.axiosInstanceService.getAxiosInstance()
    this.authSubscription = this.authService.getAuth().subscribe(authInfo => {
      this.auth = authInfo;
      if(authInfo){
        this.companyId = authInfo.company_id;
        this.memberId = authInfo.member.id;
      }else {
        this.companyId = 0;
        this.memberId = 0;
      }
    })
  }

  ngOnDestroy(): void {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

  async getCompanyVacationPlansWithYear(year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/companies/${this.companyId}/vacations/plans?year=${year}`);
    return response.data
  }

  async getCompanyVacationsWithYear(year: number): Promise<Vacation[]> {
    const response = await this.axiosInstance.get(`/companies/${this.companyId}/vacations/?year=${year}`);
    return response.data
  }

  async getCompanyCompletedVacationsWithYear(year: number): Promise<Vacation[]> {
    const response = await this.axiosInstance.get(`/companies/${this.companyId}/vacations/?year=${year}&completed=true`);
    return response.data
  }

  async getMemberVacationPlansWithYear(year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/members/${this.memberId}/vacations/plans?year=${year}&rejected=false`);
    console.log(response.data)
    return response.data
  }

  async getRejectedVacationPlansWithYear(year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/members/${this.memberId}/vacations/plans?year=${year}&rejected=true`);
    return response.data
  }  

  async getApproverVacationPlansWithYear(year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/vacations/plans?approverID=${this.memberId}&year=${year}`);
    console.log(response.data)
    return response.data
  }

  async getApproverApprovedVacationPlansWithYear(year: number): Promise<VacationPlan[]> {
    const response = await this.axiosInstance.get(`/vacations/plans?approverID=${this.memberId}&year=${year}&approved=true`);
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
    return response.data
  }

  async cancelRejectVacationPlan(vacationPlanId: ID, approvalAuth : ApprovalAuth): Promise<void> {
    const response = await this.axiosInstance.post(`/vacations/plans/${vacationPlanId}/cancel-reject`, approvalAuth);
    return response.data
  }

  async rejectVacation(vacationId: ID, approvalAuth : ApprovalAuth): Promise<void> {
    const response = await this.axiosInstance.post(`/vacations/${vacationId}/reject`, approvalAuth)
    return response.data
  }

  async cancelRejectVacation(vacationId: ID, approvalAuth : ApprovalAuth): Promise<void> {
    const response = await this.axiosInstance.post(`/vacations/${vacationId}/cancel-reject`, approvalAuth)
    return response.data
  }
}
