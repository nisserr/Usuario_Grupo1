import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  location = {
    ciudad: 'Valparaiso',
    pais: 'Chile'
  }

  tiempo = undefined;

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
    this.getWeather(this.location.ciudad, this.location.pais);
  }

  getWeather(ciudad: string, pais: string) {
    this.climaService
      .getWeather(ciudad, pais)
      .subscribe(
        res => {
          console.log(res);
          this.tiempo = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  getClima() {

    this.getWeather('su variable  ciudad', ' su variable pais')
  }
}
