import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 1,
        type: "movie",
        name: "Iron Man",
        rank: 8
      },
      {
        id: 2,
        type: "tvSeries",
        name: "Fringe",
        rank: 10
      },
      {
        id: 3,
        type: "movie",
        name: "Dark Knight",
        rank: 8
      },
      {
        id: 4,
        type: "tvSeries",
        name: "Breaking Bad",
        rank: 8
      },
      {
        id: 5,
        type: "tvSeries",
        name: "Rick And Morty",
        rank: 8
      },
      {
        id: 6,
        type: "movie",
        name: "Spider-Man Homecoming",
        rank: 9
      }
    ];
    return {movies};
  }
}
