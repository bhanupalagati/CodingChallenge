import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SongsService } from '../songs.service';

import { ChartsComponent } from './charts.component';

describe('ChartsComponent', () => {
  const songsServiceMock = {
    fetchFeature: (feature) => {
      const data = {
        acousticness: {
          "0": 0.00573,
          "1": 0.212,
          "2": 0.677,
          "3": 0.0518,
          "4": 0.163,
          "5": 0.1,
          "6": 0.034
        },
        tempo: {
          "0": 108.031,
          "1": 125.972,
          "2": 203.155,
          "3": 159.779,
          "4": 109.974,
          "5": 98.025,
          "6": 106.97
        },
        danceability: {
          "0": 0.521,
          "1": 0.735,
          "2": 0.445,
          "3": 0.268,
          "4": 0.68,
          "5": 0.762,
          "6": 0.818
        }
      }
      return of(data[feature])
    }
  }
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsComponent ],
      providers: [{provide: SongsService, useValue: songsServiceMock}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch accoustics data', () => {
    component.getAcousticness();
    expect(component.parsedDataAcc.length).toBe(7);
  });

  it('should fetch tempo data', () => {
    component.getTempo();
    expect(component.parsedDataTempo.length).toBe(7);
  });

  it('should fetch danceability data', () => {
    component.getDanceability();
    expect(component.parsedDataDanceability[0].series.length).toBe(7);
  });

  it('should have bubble chart', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ngx-charts-bubble-chart')).toBeTruthy();
  });

  it('should have bar chart', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ngx-charts-bar-vertical')).toBeTruthy();
  });

});
