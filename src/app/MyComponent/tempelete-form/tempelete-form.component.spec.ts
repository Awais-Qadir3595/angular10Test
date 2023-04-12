import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempeleteFormComponent } from './tempelete-form.component';

describe('TempeleteFormComponent', () => {
  let component: TempeleteFormComponent;
  let fixture: ComponentFixture<TempeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempeleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
