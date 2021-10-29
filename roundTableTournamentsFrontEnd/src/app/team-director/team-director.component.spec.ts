import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDirectorComponent } from './team-director.component';

describe('TeamDirectorComponent', () => {
  let component: TeamDirectorComponent;
  let fixture: ComponentFixture<TeamDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
