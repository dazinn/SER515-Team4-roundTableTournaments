import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeDirectorComponent } from './referee-director.component';

describe('RefereeDirectorComponent', () => {
  let component: RefereeDirectorComponent;
  let fixture: ComponentFixture<RefereeDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
