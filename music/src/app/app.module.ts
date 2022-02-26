import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongCardComponent } from './song-card/song-card.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { ChartsComponent } from './charts/charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

const materialImports = [
  MatButtonModule,
  MatIconModule,
  MatCardModule
]

@NgModule({
  declarations: [
    AppComponent,
    SongCardComponent,
    SongsListComponent,
    ChartsComponent
  ],
  imports: [
    ...materialImports,
    BrowserModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    NgxChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
