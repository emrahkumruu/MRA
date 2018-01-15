import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material';

import {DataService} from './../data.service';
import {Movies} from './../Movies';

import {DialogComponent} from './../dialog/dialog.component';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  constructor(private services: DataService, private route: Router, private location: Location, public dialog: MatDialog) {}

  Movies: Movies[];

  ngOnInit() {}

  goBack() {
    this.location.back();
  }

  addMovie(name,rank,type) {

    const data = {
      iconName: 'check',
      movieName : null,
      message: 'Kaydedildi',
      type : 'info'
    };


    this.openDialog(data,
      () => {
        this.services.addMovie({ name: name, rank: rank, type: type} as Movies)
          .subscribe(
            () => this.goBack()
          );

    });

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
