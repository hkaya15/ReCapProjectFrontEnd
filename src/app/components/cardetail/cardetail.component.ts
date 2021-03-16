import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDTO } from 'src/app/models/carDtoModel';
import { CarImage } from 'src/app/models/carImage';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  carImages:CarImage[]=[];
  carDtos:CarDTO;
  path = "https://localhost:44343/ImagesRepos/";
  constructor(private carService:CarService,private carDtoService:CarDtoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["carId"])
      {
        this.getCarDtos(params["carId"]);
        this.getCarImages(params["carId"]);
      }
    }
    )
}
getCarDtos(carId:number)
{
  this.carService.getCarDtos(carId).subscribe(response => {
    this.carDtos = response.data[0];
   
  })
}

getCarImages(carid:number)
{
  this.carDtoService.getCarImages(carid).subscribe(response => {
    this.carImages = response.data;
   
  });
}
getImagePath(image:String)
  {
    let newImage= image.split("ImagesRepos"); //Burada gelen local adresi temizliyoruz
    let newPath1=newImage[1]
    let newPath = this.path + newPath1;
    return newPath; 
  }

  
 

}
