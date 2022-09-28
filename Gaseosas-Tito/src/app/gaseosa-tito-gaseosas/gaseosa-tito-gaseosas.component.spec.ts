import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaseosaTitoGaseosasComponent } from './gaseosa-tito-gaseosas.component';

describe('GaseosaTitoGaseosasComponent', () => {
  let component: GaseosaTitoGaseosasComponent;
  let fixture: ComponentFixture<GaseosaTitoGaseosasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaseosaTitoGaseosasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaseosaTitoGaseosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
