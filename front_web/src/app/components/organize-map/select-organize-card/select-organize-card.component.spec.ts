import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOrganizeCardComponent } from './select-organize-card.component';

describe('SelectOrganizeCardComponent', () => {
  let component: SelectOrganizeCardComponent;
  let fixture: ComponentFixture<SelectOrganizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectOrganizeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectOrganizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
