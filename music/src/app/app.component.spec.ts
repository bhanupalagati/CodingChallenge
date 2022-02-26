import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render song card component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-song-card')).toBeTruthy();
  });

  it('should render songs list component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-song-card')).toBeTruthy();
  });

  it('should render charts component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-song-card')).toBeTruthy();
  });
});
