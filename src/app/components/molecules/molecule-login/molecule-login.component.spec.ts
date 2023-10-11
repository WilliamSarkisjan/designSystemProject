import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeLoginComponent } from './molecule-login.component';

describe('MoleculeLoginComponent', () => {
  let component: MoleculeLoginComponent;
  let fixture: ComponentFixture<MoleculeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoleculeLoginComponent]
    });
    fixture = TestBed.createComponent(MoleculeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
