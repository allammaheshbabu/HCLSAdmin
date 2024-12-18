import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAProfileComponent } from './oaprofile.component';

describe('OAProfileComponent', () => {
  let component: OAProfileComponent;
  let fixture: ComponentFixture<OAProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OAProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OAProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
