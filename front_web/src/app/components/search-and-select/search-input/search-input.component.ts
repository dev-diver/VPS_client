import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    FormsModule,NzIconModule,NzButtonModule,NzInputModule, NzDropDownModule
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.less'
})
export class SearchInputComponent {
  

  @Input() placeholder: string = '';
  @Input() items: any[] = [];
  @Input() selectHandler: (item: any) => void = () => {};
  @Output() search = new EventEmitter<string>();

  searchText: string = '';
  dropdownVisible: boolean = false;

  onSearch() : void {
    this.search.emit(this.searchText);
    this.dropdownVisible = true;
  }

  onSelectItem(item: any) : void {
    this.dropdownVisible = false;
    this.selectHandler(item);
  }

}
