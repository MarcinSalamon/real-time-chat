import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlineComponent } from './chatline.component';

describe('ChatlineComponent', () => {
  let component: ChatlineComponent;
  let fixture: ComponentFixture<ChatlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
