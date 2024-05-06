import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationberComponent } from './navigationber.component';

describe('NavigationberComponent', () => {
  let component: NavigationberComponent;
  let fixture: ComponentFixture<NavigationberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
