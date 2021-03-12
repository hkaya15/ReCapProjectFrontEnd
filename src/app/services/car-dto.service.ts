import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDTOResponseModel } from '../models/carDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {
  apiUrl="https://localhost:44343/api/cars/getcardetails";
  constructor(private httpClient:HttpClient) { }
  
  getCarDtos():Observable<CarDTOResponseModel>{
    return this.httpClient.get<CarDTOResponseModel>(this.apiUrl);
  }
}
