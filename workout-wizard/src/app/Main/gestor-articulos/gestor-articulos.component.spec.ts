import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorArticulosComponent } from './gestor-articulos.component';

describe('GestorArticulosComponent', () => {
  let component: GestorArticulosComponent;
  let fixture: ComponentFixture<GestorArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorArticulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
