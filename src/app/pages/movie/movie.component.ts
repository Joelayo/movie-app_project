import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  popularmovies:any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getpopularmovies();
  }

  getpopularmovies(){
    this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=1ccd40fe0ae0d211412d191560a3e103&language=en-US&page=1").subscribe(
      (res:any) => {
        this.popularmovies = res.results;
      },
      (err) => {

      }
    )
  }
}
