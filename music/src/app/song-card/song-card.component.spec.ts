import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { SongsService } from '../songs.service';

import { SongCardComponent } from './song-card.component';

describe('SongCardComponent', () => {
  let component: SongCardComponent;
  let fixture: ComponentFixture<SongCardComponent>;
  const songsServiceMock = {
    fetchSong: () => {
      const data = {"id": "5vYA1mW9g2Coh1HUFUSmlb",
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
      return of(data)
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongCardComponent ],
      imports: [FormsModule],
      providers: [{provide: SongsService, useValue: songsServiceMock}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a mat card component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-card')).toBeTruthy();
  });

  it('should have 18 columns', () => {
    component.searchSong();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.song-card-container__flex-row-container__flex-row-item').length).toBe(18);
  });

  it('Validate the song id', () => {
    component.searchSong();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.song-card-container__flex-row-container__flex-row-item').textContent).toContain("id: 5vYA1mW9g2Coh1HUFUSmlb");
  });
});
