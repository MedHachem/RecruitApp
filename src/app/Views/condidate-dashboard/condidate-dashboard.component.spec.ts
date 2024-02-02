import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidateDashboardComponent } from './condidate-dashboard.component';

describe('CondidateDashboardComponent', () => {
  let component: CondidateDashboardComponent;
  let fixture: ComponentFixture<CondidateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidateDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
