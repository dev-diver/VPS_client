import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverVacationCardComponent } from './approver-vacation-card.component';

describe('ApproverVacationCardComponent', () => {
  let component: ApproverVacationCardComponent;
  let fixture: ComponentFixture<ApproverVacationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproverVacationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproverVacationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
