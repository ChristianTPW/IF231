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
  public favorites: Weather[] = [];
  constructor(private wthService: WeatherService) {}

  ngOnInit(): void {
    this.wthService.getWeather('singapore').subscribe((data: Weather) => {
      this.weather = data;

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
}
