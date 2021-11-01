import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDirectorComponent } from './field-director.component';

describe('FieldDirectorComponent', () => {
  let component: FieldDirectorComponent;
  let fixture: ComponentFixture<FieldDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
