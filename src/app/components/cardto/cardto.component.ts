import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDTO } from 'src/app/models/carDtoModel';
import { CarDtoService } from 'src/app/services/car-dto.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {
  carDtos: CarDTO[]=[];
  dataLoaded=false;
  constructor(private carDtoService:CarDtoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
        this.getCarDtos();  
    })
  }

  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response=>{
      this.carDtos=response.data;
      this.dataLoaded=true;
    })
  }

}
