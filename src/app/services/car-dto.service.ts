import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDTO } from '../models/carDtoModel';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {
  apiUrl="https://localhost:44343/api/";
  constructor(private httpClient:HttpClient) { }
  
  getCarDtos():Observable<ListResponseModel<CarDTO>>{
    let finalUrl=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDTO>>(finalUrl);
  }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let finalUrl=this.apiUrl+"carsimage/getbyimagescarid?id="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(finalUrl);
  }
}
