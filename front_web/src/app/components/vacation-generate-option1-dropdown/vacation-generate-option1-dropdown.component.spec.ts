import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationGenerateOption1DropdownComponent } from './vacation-generate-option1-dropdown.component';

describe('VacationGenerateOption1DropdownComponent', () => {
  let component: VacationGenerateOption1DropdownComponent;
  let fixture: ComponentFixture<VacationGenerateOption1DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationGenerateOption1DropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationGenerateOption1DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
