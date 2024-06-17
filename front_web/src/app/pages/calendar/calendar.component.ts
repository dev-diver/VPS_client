import { Component, Input } from '@angular/core';
import { YearCalendarComponent } from '../../components/calendar/year-calendar/year-calendar.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { VacationCardComponent } from '../../components/vacation-card/vacation-card.component';
import { GroupFilterComponent } from '../../components/group-manage-card/group-filter/group-filter.component';
import { ModalAddButtonComponent } from '../../components/modal-add-button/modal-add-button.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ModalAddButtonComponent,YearCalendarComponent, NzGridModule, VacationCardComponent, GroupFilterComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent {
  @Input() year: number = new Date().getFullYear()
}
