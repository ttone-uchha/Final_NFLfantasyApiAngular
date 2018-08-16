import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflsearchComponent } from './nflsearch.component';

describe('NflsearchComponent', () => {
  let component: NflsearchComponent;
  let fixture: ComponentFixture<NflsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
