import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VacationPromotionComponent } from './pages/vacation-promotion/vacation-promotion.component';
import { AdminComponent } from './pages/admin/admin.component';

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
