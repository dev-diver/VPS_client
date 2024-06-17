import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddButtonComponent } from './modal-add-button.component';

describe('ModalAddButtonComponent', () => {
  let component: ModalAddButtonComponent;
  let fixture: ComponentFixture<ModalAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAddButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
