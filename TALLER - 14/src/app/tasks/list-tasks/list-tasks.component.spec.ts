import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksComponent } from './list-tasks.component';

describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTasksComponent]
    });
    fixture = TestBed.createComponent(ListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
