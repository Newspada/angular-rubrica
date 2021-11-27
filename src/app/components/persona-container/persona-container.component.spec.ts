import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaContainerComponent } from './persona-container.component';

describe('PersonaContainerComponent', () => {
  let component: PersonaContainerComponent;
  let fixture: ComponentFixture<PersonaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
