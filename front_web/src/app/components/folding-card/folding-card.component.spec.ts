import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldingCardComponent } from './folding-card.component';

describe('FoldingCardComponent', () => {
  let component: FoldingCardComponent;
  let fixture: ComponentFixture<FoldingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoldingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoldingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
