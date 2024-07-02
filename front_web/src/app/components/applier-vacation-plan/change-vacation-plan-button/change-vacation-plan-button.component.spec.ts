import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeVacationPlanButtonComponent } from './change-vacation-plan-button.component';

describe('ChangeVacationPlanButtonComponent', () => {
  let component: ChangeVacationPlanButtonComponent;
  let fixture: ComponentFixture<ChangeVacationPlanButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeVacationPlanButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeVacationPlanButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
