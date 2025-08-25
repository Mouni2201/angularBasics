import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthlevelComponent } from './fourthlevel.component';

describe('FourthlevelComponent', () => {
  let component: FourthlevelComponent;
  let fixture: ComponentFixture<FourthlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthlevelComponent]
    });
    fixture = TestBed.createComponent(FourthlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
