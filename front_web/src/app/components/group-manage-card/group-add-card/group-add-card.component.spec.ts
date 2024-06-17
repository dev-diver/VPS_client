import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAddCardComponent } from './group-add-card.component';

describe('GroupAddCardComponent', () => {
  let component: GroupAddCardComponent;
  let fixture: ComponentFixture<GroupAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupAddCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
