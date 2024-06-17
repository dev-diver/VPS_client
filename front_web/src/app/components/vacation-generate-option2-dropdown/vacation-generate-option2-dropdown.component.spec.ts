import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationGenerateOption2DropdownComponent } from './vacation-generate-option2-dropdown.component';

describe('VacationGenerateOption2DropdownComponent', () => {
  let component: VacationGenerateOption2DropdownComponent;
  let fixture: ComponentFixture<VacationGenerateOption2DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationGenerateOption2DropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationGenerateOption2DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
