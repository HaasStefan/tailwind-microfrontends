import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyComponent } from './proxy.component';

describe('ProxyComponent', () => {
  let component: ProxyComponent;
  let fixture: ComponentFixture<ProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProxyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
