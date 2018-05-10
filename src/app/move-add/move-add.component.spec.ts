import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveAddComponent } from './move-add.component';

describe('MoveAddComponent', () => {
  let component: MoveAddComponent;
  let fixture: ComponentFixture<MoveAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
