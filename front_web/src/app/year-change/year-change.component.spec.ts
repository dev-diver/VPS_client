import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearChangeComponent } from './year-change.component';

describe('YearChangeComponent', () => {
  let component: YearChangeComponent;
  let fixture: ComponentFixture<YearChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
