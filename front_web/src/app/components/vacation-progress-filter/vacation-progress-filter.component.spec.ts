import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationProgressFilterComponent } from './vacation-progress-filter.component';

describe('VacationProgressFilterComponent', () => {
  let component: VacationProgressFilterComponent;
  let fixture: ComponentFixture<VacationProgressFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationProgressFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationProgressFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
