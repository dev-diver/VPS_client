import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationReserveButtonComponent } from './vacation-reserve-button.component';

describe('VacationReserveButtonComponent', () => {
  let component: VacationReserveButtonComponent;
  let fixture: ComponentFixture<VacationReserveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationReserveButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationReserveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
