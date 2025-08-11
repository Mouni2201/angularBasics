import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlevelComponent } from './testlevel.component';

describe('TestlevelComponent', () => {
  let component: TestlevelComponent;
  let fixture: ComponentFixture<TestlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestlevelComponent]
    });
    fixture = TestBed.createComponent(TestlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
