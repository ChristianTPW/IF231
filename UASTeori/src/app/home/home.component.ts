import { Component, OnInit } from '@angular/core';
import { WeatherService, Weather } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public currentWeathers: Weather[] = [];
  public weather: Weather | null = null;
  public nearUMN: Weather | null = null;
  public favorites: Weather[] = [];
  public error: boolean = false;
  public err: any = null;
  public noFavorite: boolean = false;
  constructor(private wthService: WeatherService) {}

  ngOnInit(): void {
    this.wthService.getWeather('tangerang').subscribe((data: Weather) => {
      this.weather = data;

      //function to save favorite weather
      //this.wthService.storeWeather(data);
    });

    this.wthService.getWeather('kelapa dua').subscribe((data: Weather) => {
      this.nearUMN = data;

      //function to save favorite weather
      //this.wthService.storeWeather(data);
    });

    this.favorites = this.wthService.getWeatherFromLocalStorage();

    this.wthService.getCurrentWeather().then((weathers) =>
      weathers.forEach((x) =>
        x.subscribe((y: Weather) => {
          console.log(y);
          this.currentWeathers = [...this.currentWeathers, y];
          console.log(this.currentWeathers);
        })
      )
    );
  }

  public searchWeather(city: string) {
    this.wthService.getWeather(city).subscribe(
      (data: Weather) => {
        this.weather = data;
        this.error = false;
      },
      (err: any) => {
        this.error = true;
        this.err = err.statusText;
      }
    );
  }

  public favoriteWeather(city: string) {
    this.wthService.getWeather(city).subscribe(
      (data: Weather) => {
        this.error = false;
        //function to save favorite weather
        this.wthService.storeWeather(data);

        //refresh list
        this.favorites = this.wthService.getWeatherFromLocalStorage();
      },
      (err: any) => {
        this.error = true;
        this.err = err.statusText;
      }
    );
  }

  public removeFavorite(index: number, l: number) {
    var temp: Weather[] = [];

    this.favorites = temp.concat(
      this.favorites.slice(0, index),
      this.favorites.slice(index + 1, l)
    );
    this.wthService.storeWeather(this.favorites);

    if (l <= 1) {
      this.noFavorite = true;
    }
  }
}
