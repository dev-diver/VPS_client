import { Injectable } from '@angular/core';
import { AxiosInstance } from 'axios';
import { AxiosInstanceService } from './axios-instance.service';
import { Auth } from '../interfaces/auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private axiosInstance: AxiosInstance;
  private jwtHelper :JwtHelperService = new JwtHelperService();

  constructor(private router: Router, private cookieService : CookieService) {
    this.axiosInstance = new AxiosInstanceService().getAxiosInstance()
    
  }

  async login(email: string, password: string): Promise<void> {
    try{
      await this.axiosInstance.post('/auth/login', { email, password });
      const isLoggedin = this.getAuth()
      if(isLoggedin){
        this.router.navigate(['/dashboard'])
      }else{
        throw new Error('로그인 실패')
      }
    }catch(e){
      console.log(e)
    }
  }

  public getAuth(): Auth {
    const token = this.cookieService.get('authToken_info')
    const decodedToken = this.jwtHelper.decodeToken(token)
    return decodedToken.auth
  }

  async logout(): Promise<void> {
    await this.axiosInstance.post('/auth/logout');
    this.clearAuth();
    this.router.navigate(['/login']);
  }

  private clearAuth() {
    this.cookieService.delete('authToken_info')
  }
  
}
