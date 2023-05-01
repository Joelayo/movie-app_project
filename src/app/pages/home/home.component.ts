import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
  };
  

  upcomingmovies:any = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getupcomingmovies();

  }

  getupcomingmovies(){
    this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=1ccd40fe0ae0d211412d191560a3e103&language=en-US&page=1").subscribe(
      (res:any) => {
        this.upcomingmovies = res.results;
      },
      (err) => {

      }
    )
  }

}
