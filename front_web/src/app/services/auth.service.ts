import { Injectable } from '@angular/core';
import { AxiosInstance } from 'axios';
import { AxiosInstanceService } from './axios-instance.service';
import { Auth } from '../interfaces/auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private axiosInstance: AxiosInstance;
  private jwtHelper :JwtHelperService = new JwtHelperService();
  private authSubject = new BehaviorSubject<Auth | null>(null);
  auth$ = this.authSubject.asObservable();

  constructor(private router: Router, private cookieService : CookieService) {
    this.axiosInstance = new AxiosInstanceService().getAxiosInstance()
    this.loadAuthFromToken();
  }

  async login(email: string, password: string): Promise<void> {
    try{
      await this.axiosInstance.post('/auth/login', { email, password });
      this.loadAuthFromToken();
      this.router.navigate(['/dashboard'])
    }catch(e){
      console.log(e)
    }
  }

  public getAuth(): Auth | null {
    return this.authSubject.value;
  }

  private loadAuthFromToken(): void {
    const token = this.cookieService.get('authToken_info');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken) {
        this.authSubject.next(decodedToken.auth);
        return;
      }
    }
    this.authSubject.next(null);
  }


  async logout(): Promise<void> {
    try {
      await this.axiosInstance.post('/auth/logout');
    } catch (e) {
      console.log(e);
    } finally {
      this.clearAuth();
      this.router.navigate(['/login']);
    }
  }

  private clearAuth() {
    this.cookieService.delete('authToken_info')
    this.authSubject.next(null);
  }
  
}
