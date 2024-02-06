import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorProductoPageComponent } from './buscador-producto-page.component';

describe('BuscadorProductoPageComponent', () => {
  let component: BuscadorProductoPageComponent;
  let fixture: ComponentFixture<BuscadorProductoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorProductoPageComponent]
    });
    fixture = TestBed.createComponent(BuscadorProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
