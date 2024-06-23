import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVacationPlanCardComponent } from './dashboard-vacation-plan-card.component';

describe('DashboardVacationPlanCardComponent', () => {
  let component: DashboardVacationPlanCardComponent;
  let fixture: ComponentFixture<DashboardVacationPlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardVacationPlanCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardVacationPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
