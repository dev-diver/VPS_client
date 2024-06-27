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
  private auth: Auth = {} as Auth;
  public isLoggedIn = false;
  private jwtHelper :JwtHelperService = new JwtHelperService();

  constructor(private router: Router, private cookieService : CookieService) {
    this.axiosInstance = new AxiosInstanceService().getAxiosInstance()
    
  }

  async login(email: string, password: string): Promise<void> {
    try{
      const response = await this.axiosInstance.post('/auth/login', { email, password });
      const token = this.cookieService.get('authToken_info')
      if(token){
        const decodedToken = this.jwtHelper.decodeToken(token)
        this.setAuth(decodedToken)
        this.router.navigate(['/calendar'])
      }else{
        throw new Error('로그인 실패')
      }
    }catch(e){
      console.log(e)
    }
  }

  private setAuth(auth: Auth) {
    this.auth = auth;
    this.isLoggedIn = true;
  }

  public getAuth(): Auth {
    return this.auth;
  }

  async logout(): Promise<void> {
    await this.axiosInstance.post('/auth/logout');
    this.clearAuth();
    this.router.navigate(['/login']);
  }

  private clearAuth() {
    this.cookieService.delete('authToken_info')
    this.auth = {} as Auth;
    this.isLoggedIn = false;
  }
  
}
