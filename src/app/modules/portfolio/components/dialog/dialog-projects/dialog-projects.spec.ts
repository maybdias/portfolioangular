import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjects } from './dialog-projects';

describe('DialogProjects', () => {
  let component: DialogProjects;
  let fixture: ComponentFixture<DialogProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
