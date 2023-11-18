import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpBrowserComponent } from './gmp-browser.component';

describe('GmpBrowserComponent', () => {
  let component: GmpBrowserComponent;
  let fixture: ComponentFixture<GmpBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
