import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeMapFormComponent } from './organize-map-form.component';

describe('OrganizeMapFormComponent', () => {
  let component: OrganizeMapFormComponent;
  let fixture: ComponentFixture<OrganizeMapFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizeMapFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizeMapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
