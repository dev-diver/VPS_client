import { Injectable } from '@angular/core';
import { AxiosInstance } from 'axios';
import { AxiosInstanceService } from './axios-instance.service';
import { Auth } from '../interfaces/auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private axiosInstance: AxiosInstance;
  private jwtHelper :JwtHelperService = new JwtHelperService();
  private AuthInfoSubject: BehaviorSubject<Auth | null> = new BehaviorSubject<Auth | null>(null);
  public AuthInfo$: Observable<Auth | null> = this.AuthInfoSubject.asObservable();
  public subscription: Subscription;

  constructor(
    private router: Router, 
    private cookieService : CookieService,
    private axiosInstanceService: AxiosInstanceService
  ) {
    this.axiosInstance = axiosInstanceService.getAxiosInstance()
    this.subscription = this.axiosInstanceService.unauthorizedError$.subscribe((isError) => {
      if(isError){
        console.log('로그아웃')
        this.logout()
      }
    });

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
  
  public getAuth(): Observable<Auth | null>{
    return this.AuthInfo$;
  }

  public resetAuth(){
    this.AuthInfoSubject.next(null);
    this.cookieService.delete('authToken_info');
  }

  private loadAuthFromToken(): void {
    const token = this.cookieService.get('authToken_info');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken) {
        this.AuthInfoSubject.next(decodedToken.auth);
        return;
      }
    }
    this.AuthInfoSubject.next(null);
  }

  async logout(): Promise<void> {
    try {
      await this.axiosInstance.post('/auth/logout');
    } catch (e) {
      console.log(e);
    } finally {
      this.resetAuth()
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
