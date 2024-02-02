import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbasicsComponent } from './registerbasics.component';

describe('RegisterbasicsComponent', () => {
  let component: RegisterbasicsComponent;
  let fixture: ComponentFixture<RegisterbasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterbasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
