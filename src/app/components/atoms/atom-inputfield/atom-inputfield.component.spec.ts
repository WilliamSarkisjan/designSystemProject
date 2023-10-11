import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomInputfieldComponent } from './atom-inputfield.component';

describe('AtomInputfieldComponent', () => {
  let component: AtomInputfieldComponent;
  let fixture: ComponentFixture<AtomInputfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomInputfieldComponent]
    });
    fixture = TestBed.createComponent(AtomInputfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
