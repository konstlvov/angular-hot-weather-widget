import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesearchWidgetComponent } from './livesearch-widget.component';

describe('LivesearchWidgetComponent', () => {
  let component: LivesearchWidgetComponent;
  let fixture: ComponentFixture<LivesearchWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivesearchWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivesearchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
