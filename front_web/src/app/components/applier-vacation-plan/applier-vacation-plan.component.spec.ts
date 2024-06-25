import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplierVacationPlanComponent } from './applier-vacation-plan.component';

describe('ApplierVacationPlanComponent', () => {
  let component: ApplierVacationPlanComponent;
  let fixture: ComponentFixture<ApplierVacationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplierVacationPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplierVacationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
