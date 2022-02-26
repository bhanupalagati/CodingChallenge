import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SongsService } from '../songs.service';

import { SongsListComponent } from './songs-list.component';

describe('SongsListComponent', () => {
  let component: SongsListComponent;
  let fixture: ComponentFixture<SongsListComponent>;
  const songsServiceMock = {
    fetchSongs: (url) => {
      const data = {
        count: 1,
        next: '',
        previous: '',
        results: [
          {"id": "5vYA1mW9g2Coh1HUFUSmlb",
          "title": "3AM",
          "danceability": 0.521,
          "energy": 0.673,
          "key": 8,
          "loudness": -8.685,
          "mode": 1,
          "acousticness": 0.00573,
          "instrumentalness": 0.0,
          "liveness": 0.12,
          "valence": 0.543,
          "tempo": 108.031,
          "duration_ms": 225947,
          "time_signature": 4,
          "num_bars": 100,
          "num_sections": 8,
          "num_segments": 830,
          "class": 1,
          "index": 0,
          "rating": 0}
        ]
      };

      return of(data);
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsListComponent ],
      providers: [{provide: SongsService, useValue: songsServiceMock}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the ngx datatables', () => {
    component.setPage({offset: 0});
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ngx-datatable')).toBeTruthy();
  });

  it('should validate the response', () => {
    component.setPage({offset: 0});
    fixture.detectChanges();
    expect(component.songsResp.count).toBe(1);
    expect(component.songsResp.next).toEqual('');
    expect(component.songsResp.previous).toEqual('');
    expect(component.songsResp.results.length).toBe(1);
    expect(component.songsResp.results[0].id).toBe("5vYA1mW9g2Coh1HUFUSmlb");

  });
});
