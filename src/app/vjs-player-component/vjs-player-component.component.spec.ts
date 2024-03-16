import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VjsPlayerComponentComponent } from './vjs-player-component.component';

describe('VjsPlayerComponentComponent', () => {
  let component: VjsPlayerComponentComponent;
  let fixture: ComponentFixture<VjsPlayerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VjsPlayerComponentComponent]
    });
    fixture = TestBed.createComponent(VjsPlayerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
