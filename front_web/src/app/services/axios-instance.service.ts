import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AxiosInstanceService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl,
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
