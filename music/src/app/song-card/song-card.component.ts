import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {
  constructor(private songsService: SongsService) { }
  search = "";
  song = undefined;
  error = false;
  ngOnInit(): void {
  }

  searchSong() {
    this.songsService.fetchSong(this.search).subscribe((res: any) => {
      if (res.error) {
        this.error = true;
      } else {
        this.error = false;
        this.song = res;
      }
    });
  }

}
