import { Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CommonModule } from '@angular/common';
import { YearChangeComponent } from '../../year-change/year-change.component';

@Component({
  selector: 'app-vacation-dashboard',
  standalone: true,
  imports: [YearChangeComponent,CommonModule, NzCardModule, NzListModule],
  templateUrl: './vacation-dashboard.component.html',
  styleUrl: './vacation-dashboard.component.less',
  encapsulation: ViewEncapsulation.None
})
export class VacationDashboardComponent {
  @Input() year: number = new Date().getFullYear()
  data: { [key:number]: string[]} = {
    2024: [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.'
    ]
  }

  updateDate(): void {
    this.data[2023] = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['year']){
      this.updateDate();
    }
  }

  decreaseYear = () => {
    this.year-=1
  }

  increaseYear = () => {
    this.year+=1
  }

}
