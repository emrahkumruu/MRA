import {Pipe, PipeTransform} from "@angular/core";
import {Movies} from './../Movies';


@Pipe({
  name: 'filterPipe',
})

class FilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item[filter.type] === filter.data);
  }
}

@Pipe({
  name: 'sort'
})

class SortPipe implements PipeTransform {
  Movies: Movies[] = [];

  transform(items: any[], sort: any, Movies:any[]): any {

    if (!items || !sort || !sort.type || !sort.sortBy) {
      return items;
    }

    if (!items[0].hasOwnProperty(sort.sortBy)) {
      console.warn("check sort arguments", items[0]);
      return items;
    }

    for (const item in items) {
      this.Movies.push([items[item], [items[item][sort.sortBy]]]);
    }

    this.Movies.sort(function (a, b) {
      return a[1] - b[1];
    });


    if (sort.type === 'desc') {
      this.Movies.sort().reverse();
    }

    items = [];

    for (const item in  this.Movies) {
      items.push(this.Movies[item][0]);
    }

    this.Movies = [];

    return items.filter(item => item);

  }
}

export {FilterPipe, SortPipe};
