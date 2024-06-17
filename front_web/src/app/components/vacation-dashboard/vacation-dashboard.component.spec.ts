import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationDashboardComponent } from './vacation-dashboard.component';

describe('VacationDashboardComponent', () => {
  let component: VacationDashboardComponent;
  let fixture: ComponentFixture<VacationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
