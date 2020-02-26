import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcsfullComponent } from './icsfull.component';

describe('IcsfullComponent', () => {
  let component: IcsfullComponent;
  let fixture: ComponentFixture<IcsfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcsfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcsfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
