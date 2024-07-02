import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VacationPromotionComponent } from './pages/vacation-promotion/vacation-promotion.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './auth/auth.guard';
import { ApproveComponent } from './pages/approve/approve.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: '로그인',
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    canActivate: [authGuard],
    title: '캘린더',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    title: '신청현황',
  },
  {
    path: 'approve',
    component: ApproveComponent,
    canActivate: [authGuard],
    title: '결재',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
    title: '프로필',
  },
  {
    path: 'notification',
    component: NotificationComponent,
    canActivate: [authGuard],
    title: '알림',
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    title: '관리',
  },
  {
    path: 'vacation-promotion',
    component: VacationPromotionComponent,
    canActivate: [authGuard],
    title: '휴가 촉진',
  },
];
