import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailcomposeComponent } from './mailcompose.component';

describe('MailcomposeComponent', () => {
  let component: MailcomposeComponent;
  let fixture: ComponentFixture<MailcomposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailcomposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailcomposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
