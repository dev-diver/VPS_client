import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AxiosInstanceService } from './axios-instance.service';
import { AxiosInstance } from 'axios';
import { Subscription } from 'rxjs';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private auth : Auth | null = null;
  private hookInstance: AxiosInstance;
  private axiosInstance: AxiosInstance;
  private authSubscription: Subscription

  constructor(private authService: AuthService, private axiosInstanceService: AxiosInstanceService) {
    this.hookInstance = this.axiosInstanceService.getHookInstance();
    this.axiosInstance = this.axiosInstanceService.getAxiosInstance();
    this.authSubscription = this.authService.getAuth().subscribe(authInfo => {
      this.auth = authInfo;
    })
  }

  ngOnDestroy(): void {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

  async updateClient(): Promise<void> {
    const requestBody = {  
        "push_data": {
            "tag":"latest",
            "media_type": "none"
        },
        "repository": {
            "repo_name" : "devdiver/vacation_promotion_client"
        }
    }
    const response = await this.axiosInstance.post<void>(`/update`, requestBody);
    return response.data
  }

  async updateServer(): Promise<void> {
    const requestBody = {  
      "push_data": {
          "tag":"latest",
          "media_type": "none"
      },
      "repository": {
          "repo_name" : "devdiver/vacation_promotion_server"
      }
  }
    const response = await this.axiosInstance.post<void>(`/update`, requestBody);
    return response.data
  }

  async haveUpdateClient(): Promise<boolean> {
    const response = await this.axiosInstance.get<boolean>(`/have-update?service=client`);
    return response.data
  }

  async haveUpdateServer(): Promise<boolean> {
    const response = await this.axiosInstance.get<boolean>(`/have-update?service=server`);
    return response.data
  }
}
