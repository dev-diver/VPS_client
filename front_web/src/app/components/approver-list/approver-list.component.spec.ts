import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverListComponent } from './approver-list.component';

describe('ApproverListComponent', () => {
  let component: ApproverListComponent;
  let fixture: ComponentFixture<ApproverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproverListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
