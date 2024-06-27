import { Component, Input } from '@angular/core';
import { YearCalendarComponent } from '../../components/calendar/year-calendar/year-calendar.component';
import { VacationCardComponent } from '../../components/vacation-card/vacation-card.component';
import { GroupFilterComponent } from '../../components/group-manage-card/group-filter/group-filter.component';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { ApplyVacationComponent } from '../../components/apply-vacation/apply-vacation.component';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ApplyVacationComponent, PageLayoutComponent,YearCalendarComponent, VacationCardComponent, GroupFilterComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent {
  @Input() year: number =  new Date().getFullYear();
  auth: Auth = {} as Auth;
  constructor(private authService: AuthService) {
    this.auth = this.authService.getAuth();
  }
}
