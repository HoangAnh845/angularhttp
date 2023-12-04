import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UperbarComponent } from './uperbar.component';

describe('UperbarComponent', () => {
  let component: UperbarComponent;
  let fixture: ComponentFixture<UperbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UperbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UperbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
