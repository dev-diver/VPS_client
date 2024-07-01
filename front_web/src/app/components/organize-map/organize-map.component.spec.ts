import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeMapComponent } from './organize-map.component';

describe('OrganizeMapComponent', () => {
  let component: OrganizeMapComponent;
  let fixture: ComponentFixture<OrganizeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizeMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
