import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPromotionDashboardComponent } from './vacation-promotion-dashboard.component';

describe('VacationPromotionDashboardComponent', () => {
  let component: VacationPromotionDashboardComponent;
  let fixture: ComponentFixture<VacationPromotionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationPromotionDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationPromotionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
