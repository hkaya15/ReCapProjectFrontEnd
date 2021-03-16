import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDTO } from '../models/carDtoModel';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44343/api/";
  constructor(private httpClient:HttpClient) { }
  
  getCars(): Observable<ListResponseModel<Car>>{
    let finalUrl=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(finalUrl);
  }
  getCarsByBrand(brandId:number): Observable<ListResponseModel<Car>>{
    let finalUrl=this.apiUrl+"cars/getbybrandid?id="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(finalUrl);
  }
  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>>{
    let finalUrl=this.apiUrl+"cars/getbycolorid?id="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(finalUrl);
  }
  
  getCarDtos(carId:number):Observable<ListResponseModel<CarDTO>>
  {
    let newPath = this.apiUrl + "cars/getcardetailsbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDTO>>(newPath);
  }
}
