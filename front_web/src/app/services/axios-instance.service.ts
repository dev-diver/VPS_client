import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AxiosInstanceService {
  private axiosInstance: AxiosInstance;
  private unauthorizedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public unauthorizedError$: Observable<boolean> = this.unauthorizedSubject.asObservable();

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // 요청 인터셉터
    this.axiosInstance.interceptors.request.use(
      config => config,
      error => Promise.reject(error)
    );

    // 응답 인터셉터
    this.axiosInstance.interceptors.response.use(
      response => response,
      error => {
        if (error.response) {
          // 서버가 응답했지만 상태 코드가 2xx 범위 밖인 경우
          console.error('Error response:', error.response.data);
          if(error.response.status == 401){
            this.unauthorizedSubject.next(true);
            console.log('잘못된 권한입니다. 로그아웃 됩니다.')
          }
        } else if (error.request) {
          // 요청이 서버에 도달하지 못한 경우
          console.error('Error request:', error.request);
        } else {
          // 다른 오류가 발생한 경우
          console.error('Error:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  // Axios 인스턴스를 반환하는 메소드
  getAxiosInstance = (): AxiosInstance => {
    return this.axiosInstance;
  }

}
