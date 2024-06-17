import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMembersCardComponent } from './company-members-card.component';

describe('CompanyMembersCardComponent', () => {
  let component: CompanyMembersCardComponent;
  let fixture: ComponentFixture<CompanyMembersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyMembersCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyMembersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
