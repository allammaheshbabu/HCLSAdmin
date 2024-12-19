import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagelabComponent } from './managelab.component';

describe('ManagelabComponent', () => {
  let component: ManagelabComponent;
  let fixture: ComponentFixture<ManagelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagelabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
