import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndSelectComponent } from './search-and-select.component';

describe('SearchAndSelectComponent', () => {
  let component: SearchAndSelectComponent;
  let fixture: ComponentFixture<SearchAndSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAndSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAndSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
