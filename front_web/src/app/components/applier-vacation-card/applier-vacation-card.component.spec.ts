import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplierVacationCardComponent } from './applier-vacation-card.component';

describe('ApplierVacationCardComponent', () => {
  let component: ApplierVacationCardComponent;
  let fixture: ComponentFixture<ApplierVacationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplierVacationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplierVacationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
