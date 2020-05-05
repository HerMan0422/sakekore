import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsakeComponent } from './osake.component';

describe('OsakeComponent', () => {
  let component: OsakeComponent;
  let fixture: ComponentFixture<OsakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
