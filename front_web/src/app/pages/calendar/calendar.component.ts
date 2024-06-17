import { Component, Input } from '@angular/core';
import { YearCalendarComponent } from '../../components/calendar/year-calendar/year-calendar.component';
import { VacationCardComponent } from '../../components/vacation-card/vacation-card.component';
import { GroupFilterComponent } from '../../components/group-manage-card/group-filter/group-filter.component';
import { ModalAddButtonComponent } from '../../components/modal-add-button/modal-add-button.component';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [PageLayoutComponent, ModalAddButtonComponent,YearCalendarComponent, VacationCardComponent, GroupFilterComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent {
  @Input() year: number = new Date().getFullYear()
}
