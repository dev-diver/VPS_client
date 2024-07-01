import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeCardComponent } from './organize-card.component';

describe('OrganizeCardComponent', () => {
  let component: OrganizeCardComponent;
  let fixture: ComponentFixture<OrganizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
