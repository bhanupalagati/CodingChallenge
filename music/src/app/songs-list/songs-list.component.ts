import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  url = "songs?start=1&limit=10"
  offset = 0
  size = 10
  songsResp: any = {}
  test = 0
  columns = [{ name: 'index' }, { name: 'id' }, { name: 'title' }, { name: 'num_segments' },
  { name: 'danceability' }, { name: 'energy' }, { name: 'mode' }, { name: 'acousticness' },
  { name: 'tempo' }, { name: 'duration_ms' }, { name: 'num_sections' }]
  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.getProductsPage(this.url)
  }

  setPage(page) {
    this.getProductsPage("songs?start="+((page.offset+1)*this.size)+"&limit=10")
  }


  getProductsPage(url) {
    this.songsService.fetchSongs(url).subscribe(res => {
      this.songsResp = res;
    });
  }

}
