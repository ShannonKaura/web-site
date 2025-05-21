import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookZoomComponent } from './book-zoom.component';

describe('BookZoomComponent', () => {
  let component: BookZoomComponent;
  let fixture: ComponentFixture<BookZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
