import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomButtonComponent } from './atom-button.component';

describe('AtomButtonComponent', () => {
  let component: AtomButtonComponent;
  let fixture: ComponentFixture<AtomButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomButtonComponent]
    });
    fixture = TestBed.createComponent(AtomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
