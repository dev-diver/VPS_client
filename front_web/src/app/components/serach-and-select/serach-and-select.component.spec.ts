import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachAndSelectComponent } from './serach-and-select.component';

describe('SerachAndSelectComponent', () => {
  let component: SerachAndSelectComponent;
  let fixture: ComponentFixture<SerachAndSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerachAndSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerachAndSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
