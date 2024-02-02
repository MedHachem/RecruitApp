import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsfilterComponent } from './jobsfilter.component';

describe('JobsfilterComponent', () => {
  let component: JobsfilterComponent;
  let fixture: ComponentFixture<JobsfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
