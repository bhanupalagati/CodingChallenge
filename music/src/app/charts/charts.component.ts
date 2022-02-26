import { Component, HostListener, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabelInd: string = 'Index';
  yAxisLabelAcc: string = 'Acoustics';
  yAxisLabelDance: string = 'Danceability';
  yAxisLabeTempo: string = 'Tempo';
  timeline: boolean = true;
  parsedDataAcc: any[] = [];
  parsedDataTempo: any[] = [];
  parsedDataDuration: any[] = [];
  parsedDataDanceability = [{name: "danceability", series: []}]
  view: any[] = [800, 400];
  loading = true;
  colorScheme = {
    domain: ['#89CFF0', '#87CEEB', '#B0E0E6', '#00FFFF', '#40E0D0', '#0047AB', '#B0E0E6', '#0073CF', '#2A52BE', '#007FFF', '#1C39BB', '#000080', '#120A8F', '#000F89', '#4B0082']
  };
  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.showData();
    this.loading = false;
    this.resizeAction(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeAction(window.innerWidth);
  }

  resizeAction(width) {
    this.view[0] = width < 500 ? width - 60 : width - 300
  }

  showData() {
    this.getAcousticness();
    this.getTempo();
    this.getDanceability();
  }

  getAcousticness() {
    this.parsedDataAcc = [];
    this.songsService.fetchFeature('acousticness').subscribe(res => {
      for (const [name, value] of Object.entries(res)) {
          this.parsedDataAcc.push({name, value})
      }
      this.parsedDataAcc = this.parsedDataAcc.slice(0)
    });
  }

  getTempo() {
    this.parsedDataTempo = [];
    this.songsService.fetchFeature('tempo').subscribe(res => {
      for (const [name, value] of Object.entries(res)) {
          this.parsedDataTempo.push({name, value})
      }
      this.parsedDataTempo = this.parsedDataTempo.slice(0)
    });
  }

  getDanceability() {
    this.parsedDataDanceability[0].series = []
    this.songsService.fetchFeature('danceability').subscribe(res => {
      for (const [name, value] of Object.entries(res)) {
          this.parsedDataDanceability[0].series.push({name, x: name, y: value, r: 1})
      }
      this.parsedDataDanceability = this.parsedDataDanceability.slice(0);
      this.loading = false;
    });
  }
}
