import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductoPageComponent } from './agregar-producto-page.component';

describe('AgregarProductoPageComponent', () => {
  let component: AgregarProductoPageComponent;
  let fixture: ComponentFixture<AgregarProductoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProductoPageComponent]
    });
    fixture = TestBed.createComponent(AgregarProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
