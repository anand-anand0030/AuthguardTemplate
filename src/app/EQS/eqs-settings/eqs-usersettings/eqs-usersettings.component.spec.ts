import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqsUsersettingsComponent } from './eqs-usersettings.component';

describe('EqsUsersettingsComponent', () => {
  let component: EqsUsersettingsComponent;
  let fixture: ComponentFixture<EqsUsersettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqsUsersettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqsUsersettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
