import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) {}

  cars:Car[] = [];

  ngOnInit() : void
  {
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"])
      {
        this.getCarsByBrandId(params["brandId"])
      }
      else
      {
        this.getCars();
      }
    });
  }

  getCars()
  {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarsByBrandId(brandId:number)
  {
    this.carService.getCarsByBrandId(brandId).subscribe(response =>{
      this.cars = response.data;
    })
  }

  getImageUrl(imageName:string)
  {
    const baseUrl:string = "http://localhost:5062/images/"
    return baseUrl + imageName;
  }

}
