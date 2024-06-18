import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVacationCardComponent } from './dashboard-vacation-card.component';

describe('DashboardVacationCardComponent', () => {
  let component: DashboardVacationCardComponent;
  let fixture: ComponentFixture<DashboardVacationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardVacationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardVacationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
