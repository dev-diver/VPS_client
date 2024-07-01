import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTagComponent } from './group-tag.component';

describe('GroupTagComponent', () => {
  let component: GroupTagComponent;
  let fixture: ComponentFixture<GroupTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
