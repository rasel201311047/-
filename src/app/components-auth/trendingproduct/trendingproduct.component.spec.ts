import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingproductComponent } from './trendingproduct.component';

describe('TrendingproductComponent', () => {
  let component: TrendingproductComponent;
  let fixture: ComponentFixture<TrendingproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
