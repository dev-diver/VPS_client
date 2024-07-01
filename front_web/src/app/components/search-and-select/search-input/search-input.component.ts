import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule,NzIconModule,NzButtonModule,NzInputModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.less'
})
export class SearchInputComponent {
  searchText: string = '';
  placeholder: string = '이름 또는 메일';
  @Output() search = new EventEmitter<string>();

  onSearch() : void {
    this.search.emit(this.searchText);
  }
}
