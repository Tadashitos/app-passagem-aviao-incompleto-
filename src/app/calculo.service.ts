import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { URL_API } from './countries.api';
import { Countries } from './countries.model';
import { Cities } from './cities.model';
import { firstValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class CalculoService{

    constructor(private http: HttpClient){}


    public getCountries(): Observable<Countries[]>{

        return this.http.get<Countries[]>(`${URL_API}/countries`)
            .pipe(map((resposta: Countries[]) => resposta))
        
    }

    public getCities(): Observable<any>{
        return this.http.get(`${URL_API}/countries`)
    }


    public degreesToRadians(degrees: number): number{

        const PI = 3.14
        return degrees * (PI/180)

    }

    public getDistancia(originLatitude: number, originLongitude: number, destinationLatitude: number, destinationLongitude: number): number{

        const EARTH_RADIUS = 6371; // Earth

        let originLatitudeRadians = this.degreesToRadians(originLatitude); 
        let destinationLatitudeRadians = this.degreesToRadians(destinationLatitude);
        let originLongitudeRadians = this.degreesToRadians(originLongitude)
        let destinationLongitudeRadians = this.degreesToRadians(destinationLongitude) 

        let diffLatitudeRadians = destinationLatitudeRadians - originLatitudeRadians 
        let diffLongitudeRadians = destinationLongitudeRadians - originLongitudeRadians

        let kmDistance = 2 * EARTH_RADIUS * Math.asin( Math.sqrt( Math.sin(diffLatitudeRadians / 2) * Math.sin(diffLatitudeRadians / 2) + Math.cos(originLatitudeRadians) * Math.cos(destinationLatitudeRadians) * Math.sin(diffLongitudeRadians / 2) * Math.sin(diffLongitudeRadians / 2)));

        return kmDistance

    }


}