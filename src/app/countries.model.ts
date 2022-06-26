import { Cities } from "./cities.model"

export class Countries{
  
  public id: number
  public country: string
  public cities: Array<Cities>

}

/*
CountryModelList = []
for country in coutries {
  CitiesModelList = []
  for city in country['cities'] {
    CitiesModelList.append(new CityModel(city['id'], city['latitude'], city['longitude']))
  }
  CountryModelList.append(
    new CountryModel(
      country['id'], 
      country['country'], 
      CitiesModelList
      )
  )
}

for(country in countries){
  countries: Countries[] = []
  for(city in )
}

/*
CountryModelList = Country[]
for country in json["countries"] {
  CitiesModelList = City[]
  for city in country['cities'] {
    CitiesModelList.append(new CityModel(city['id'], city['latitude'], city['longitude']))
  }
  CountryModelList.append(
    new CountryModel(
      country['id'], 
      country['country'], 
      CitiesModelList
      )
  )
} 


for country CountryModelList {
  console.log(country.cities)
}

for (country in json["countries"]) {
  cities.append(country["cities"])
}

*/