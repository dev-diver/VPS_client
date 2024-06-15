import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { VacationPromotionComponent } from './vacation-promotion/vacation-promotion.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: '로그인',
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    title: '캘린더',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: '대쉬보드',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: '프로필',
  },
  {
    path: 'notification',
    component: NotificationComponent,
    title: '알림',
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: '관리',
  },
  {
    path: 'vacation-promotion',
    component: VacationPromotionComponent,
    title: '휴가 촉진',
  },
];
