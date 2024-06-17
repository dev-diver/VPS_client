import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupManageCardComponent } from './group-manage-card.component';

describe('GroupManageCardComponent', () => {
  let component: GroupManageCardComponent;
  let fixture: ComponentFixture<GroupManageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupManageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupManageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
