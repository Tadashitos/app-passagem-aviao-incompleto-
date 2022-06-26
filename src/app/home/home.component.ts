import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../calculo.service';
import { Countries } from '../countries.model';
import { Cities } from '../cities.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  public titulo: string = 'Faça a viagem dos seus sonhos!'
  public subtitulo: string = 'Use milhas para ter os melhores pacotes de viagens e aproveite suas férias!'

  public countries: Array<Countries>

  public cities: Array<Cities>

  //public country: string = 'Canadá'


  constructor(private calculoService: CalculoService) { }

  ngOnInit(): void {

    
    this.calculoService.getCountries()
      .subscribe((resposta: Countries[]) => {
        this.countries = resposta
        for(let x in this.countries){
          console.log(this.countries[x].cities)
          for(let y in this.countries){
            console.log(this.countries[x].cities[y].city)
          }
        }
      })
    
    // this.calculoService.getCountries()
    //   .then((resposta: Countries[]) => {
    //     this.countries = resposta
    //     /*
    //     for(let x in this.countries){
    //       //console.log(this.countries[x].cities)
    //       this.cities = this.countries[x].cities
    //       console.log(this.cities)
    //     }
    //     */
    //    this.countries.forEach((country) => {
    //     this.cities = country.cities
    //     console.log(this.cities)
    //     })
    //   })

  }


  public mudarCidade(isso: any): void{
    console.log(isso)
  }
  

}
