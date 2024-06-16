import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPromotionComponent } from './vacation-promotion.component';

describe('VacationPromotionComponent', () => {
  let component: VacationPromotionComponent;
  let fixture: ComponentFixture<VacationPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationPromotionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
