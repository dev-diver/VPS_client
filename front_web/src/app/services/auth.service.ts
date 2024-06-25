import { Injectable } from '@angular/core';
import { AxiosInstance } from 'axios';
import { AxiosInstanceService } from './axios-instance.service';
import { Auth } from '../interfaces/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private axiosInstance: AxiosInstance;
  public auth: Auth = {} as Auth;

  constructor(private router: Router, ) {
    this.axiosInstance = new AxiosInstanceService().getAxiosInstance()
  }

  async login(email: string, password: string): Promise<void> {
    const response = await this.axiosInstance.post('/auth/login', { email, password });
    this.setAuth(response.data)
    this.router.navigate(['/calendar'])
  }

  logout() {
    this.clearAuth();
  }

  private setAuth(auth: Auth) {
    this.auth = auth;
  }

  private clearAuth() {
    this.auth = {} as Auth;
  }
  
}
