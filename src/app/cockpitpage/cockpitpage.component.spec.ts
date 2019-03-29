import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitpageComponent } from './cockpitpage.component';

describe('CockpitpageComponent', () => {
  let component: CockpitpageComponent;
  let fixture: ComponentFixture<CockpitpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockpitpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
