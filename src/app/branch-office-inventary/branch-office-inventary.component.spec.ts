import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOfficeInventaryComponent } from './branch-office-inventary.component';

describe('BranchOfficeInventaryComponent', () => {
  let component: BranchOfficeInventaryComponent;
  let fixture: ComponentFixture<BranchOfficeInventaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchOfficeInventaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchOfficeInventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
