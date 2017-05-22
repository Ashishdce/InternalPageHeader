import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalPageHeaderComponent } from './internal-page-header.component';

describe('InternalPageHeaderComponent', () => {
  let component: InternalPageHeaderComponent;
  let fixture: ComponentFixture<InternalPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
