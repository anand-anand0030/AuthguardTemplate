import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEqsComponent } from './sidebar-eqs.component';

describe('SidebarEqsComponent', () => {
  let component: SidebarEqsComponent;
  let fixture: ComponentFixture<SidebarEqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarEqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
