import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsRegisterComponent } from './informations-register.component';

describe('InformationsRegisterComponent', () => {
  let component: InformationsRegisterComponent;
  let fixture: ComponentFixture<InformationsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
