import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverVacationPlanComponent } from './approver-vacation-plan.component';

describe('ApproverVacationPlanComponent', () => {
  let component: ApproverVacationPlanComponent;
  let fixture: ComponentFixture<ApproverVacationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproverVacationPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproverVacationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
