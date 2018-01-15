import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {DataService} from './../data.service';
import {Movies} from './../Movies';

import {MatDialog} from '@angular/material';

import {DialogComponent} from './../dialog/dialog.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  Movies: Movies[];
  filter: {};
  movie: false;
  tvSeries: false;
  sortArg: {};
  dialogResult: '';

  constructor(private services: DataService, private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.services.getHeroes()
      .subscribe(Movies => this.Movies = Movies);
  }

  redirectAdd() {
    this.router.navigateByUrl('/movies/add');
  }

  deleteMovie(movie: Movies): void {

    const data = {
      iconName: 'trash-o',
      movieName :  movie.name,
      message:'Silmek İstedğinizden Emin misiniz ?',
      type: 'confirm'
    };


    this.openDialog(data,
      () => {

        this.services.deleteMovie(movie)
          .subscribe(
            () => this.Movies = this.Movies.filter(h => h !== movie));

      });

  }

  updateMovie(movie: Movies): void {
    this.services.updateMovie(movie)
      .subscribe(() => console.info('movie rated'));
  }

  filterList(input, type) {

    const arg = {
      data: input.name,
      type: type
    };

    /* input checked promise */
    (!input.checked) ? this[input.name] = true : this[input.name] = false;

    if (!this.movie || !this.tvSeries) {
      this.filter = arg;
    } else {
      this.filter = {};
    }

  }

  sortBy(type, sortBy) {
    this.sortArg = {type: type, sortBy: sortBy};
  }

  rateMovie(movie, type) {
    if (type.toLowerCase() === 'up') {

      if (movie.rank >= 0 && movie.rank < 10) {
        movie.rank += 1;
        this.updateMovie(movie);
      }

    } else if (type.toLowerCase() === 'down') {


      if (movie.rank > 0 && movie.rank <= 10) {
        movie.rank -= 1;
        this.updateMovie(movie);
      }

    } else {
      return console.warn('check upate params');
    }
  }

  openDialog(data, callback): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (result) {
        callback();
      }

    });
  }


}

