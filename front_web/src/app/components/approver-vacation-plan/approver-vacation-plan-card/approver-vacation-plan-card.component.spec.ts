import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverVacationPlanCardComponent } from './approver-vacation-plan-card.component';

describe('ApproverVacationPlanCardComponent', () => {
  let component: ApproverVacationPlanCardComponent;
  let fixture: ComponentFixture<ApproverVacationPlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproverVacationPlanCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproverVacationPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
