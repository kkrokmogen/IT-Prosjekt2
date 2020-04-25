import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndercatStartComponent } from './undercat-start.component';

describe('UndercatStartComponent', () => {
  let component: UndercatStartComponent;
  let fixture: ComponentFixture<UndercatStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndercatStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndercatStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
