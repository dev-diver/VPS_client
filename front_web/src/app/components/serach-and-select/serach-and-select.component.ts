import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { SearchInputComponent } from '../serachAndselect/search-input/search-input.component';
import { CompanyService } from '../../services/company.service';
import { Auth } from '../../interfaces/auth';
import { Member } from '../../interfaces/member';
import { CommonModule } from '@angular/common';
import { ID } from '../../interfaces/id';

@Component({
  selector: 'app-serach-and-select',
  standalone: true,
  imports: [CommonModule,NzListModule, SearchInputComponent],
  templateUrl: './serach-and-select.component.html',
  styleUrl: './serach-and-select.component.less'
})
export class SerachAndSelectComponent {
  @Input() auth: Auth = {} as Auth;
  @ViewChild('searchInput') searchInput!: SearchInputComponent;
  @Output() memberSelected = new EventEmitter<ID>();

  items: Member[] = [];

  constructor(private companyService: CompanyService) {}

  onSearch(searchText: string): void {
    console.log(searchText)
    this.companyService.getCompanyMembersWithKeyword(this.auth.company_id, searchText).then((data) => {
      console.log(data)
      this.items = data
    });
  }

  selectItem(item: Member): void {
    this.searchInput.searchText = item.name;
    this.memberSelected.emit(item.id);
  }
}
