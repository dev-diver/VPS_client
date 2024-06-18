import { Component, Input, SimpleChanges } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-vacation-dashboard',
  standalone: true,
  imports: [NzButtonModule,NzIconModule, CommonModule, NzCardModule, NzListModule],
  templateUrl: './vacation-dashboard.component.html',
  styleUrl: './vacation-dashboard.component.less'
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
