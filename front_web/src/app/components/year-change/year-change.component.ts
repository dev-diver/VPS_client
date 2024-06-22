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
    this.year-=1
    this.yearChange.emit(this.year);
  }

  increaseYear = () => {
    this.year+=1
    this.yearChange.emit(this.year);
  }
}
