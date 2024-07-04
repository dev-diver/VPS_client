import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { SearchInputComponent } from './search-input/search-input.component';
import { CompanyService } from '../../services/company.service';
import { Member } from '../../interfaces/member';
import { CommonModule } from '@angular/common';
import { ID } from '../../interfaces/id';
import { OrganizeMapFormComponent } from '../organize-map-form/organize-map-form.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-search-and-select',
  standalone: true,
  imports: [
    CommonModule,NzListModule, NzGridModule, NzDropDownModule,
    SearchInputComponent, OrganizeMapFormComponent
  ],
  templateUrl: './search-and-select.component.html',
  styleUrl: './search-and-select.component.less'
})
export class SearchAndSelectComponent {
  @ViewChild('searchInput') searchInput!: SearchInputComponent;
  @Output() memberSelected = new EventEmitter<ID>();

  items: Member[] = [];

  constructor(private companyService: CompanyService) {}

  onSearch(searchText: string): void {
    console.log(searchText)
    this.companyService.getCompanyMembersWithKeyword(searchText).then((data) => {
      console.log(data)
      if(data?.length>0){
        this.items = data
      }else{
        this.searchInput.placeholder = '검색 결과가 없습니다.'
        this.searchInput.searchText = ''
      }
    });
  }

  selectItem = (item: Member): void => {
    this.searchInput.searchText = item.name;
    this.memberSelected.emit(item.id);
    this.items = [];
  }
}
