import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplierVacationPlanCardComponent } from './applier-vacation-plan-card.component';

describe('ApplierVacationPlanCardComponent', () => {
  let component: ApplierVacationPlanCardComponent;
  let fixture: ComponentFixture<ApplierVacationPlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplierVacationPlanCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplierVacationPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
