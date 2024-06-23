import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-year-change',
  standalone: true,
  imports: [NzButtonModule,NzIconModule],
  templateUrl: './year-change.component.html',
  styleUrl: './year-change.component.less'
})
export class YearChangeComponent {
  @Input() year: number = new Date().getFullYear()
  @Output() yearChange = new EventEmitter<number>();

  decreaseYear = () => {
    this.yearChange.emit(this.year-1);
  }

  increaseYear = () => {
    this.yearChange.emit(this.year+1);
  }
}
