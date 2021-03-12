import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDTO } from 'src/app/models/carDtoModel';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 // cars:Car[]=[];
  carDtos: CarDTO[]=[];
  dataLoaded=false;
  constructor(/*private carService:CarService,*/private carDtoService:CarDtoService) { }

  ngOnInit(): void {
   // this.getCars();
    this.getCarDtos();
  }

 /* getCars(){
   this.carService.getCars().subscribe(response=>{
     this.cars=response.data;
     this.dataLoaded=true;
   });
  }*/

  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response=>{
      this.carDtos=response.data;
      this.dataLoaded=true;
    })
  }

}
