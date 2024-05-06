import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemviewComponent } from './single-itemview.component';

describe('SingleItemviewComponent', () => {
  let component: SingleItemviewComponent;
  let fixture: ComponentFixture<SingleItemviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleItemviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleItemviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
