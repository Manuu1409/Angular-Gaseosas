import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoGaseosasTitoComponent } from './contacto-gaseosas-tito.component';

describe('ContactoGaseosasTitoComponent', () => {
  let component: ContactoGaseosasTitoComponent;
  let fixture: ComponentFixture<ContactoGaseosasTitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoGaseosasTitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoGaseosasTitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
