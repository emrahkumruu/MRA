import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import 'hammerjs';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {
  MatMenuModule, MatIconModule, MatButtonModule,
  MatCheckboxModule, MatListModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatDialogModule
} from '@angular/material';

import { FilterPipe, SortPipe } from './movies/filter.pipe';


import {DataService} from './data.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  }, {
    path: 'movies',
    component: MoviesComponent
  }, {
    path: 'movies/add',
    component: MovieAddComponent
  }
];

@NgModule({
  declarations: [
    FilterPipe,
    SortPipe,
    AppComponent,
    MoviesComponent,
    MovieAddComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule {}
