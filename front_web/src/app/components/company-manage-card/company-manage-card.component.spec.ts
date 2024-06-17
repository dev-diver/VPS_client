import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManageCardComponent } from './company-manage-card.component';

describe('CompanyManageCardComponent', () => {
  let component: CompanyManageCardComponent;
  let fixture: ComponentFixture<CompanyManageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyManageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyManageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
