import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  constructor(private carService:CarService) {}

  cars:Car[] = [];

  ngOnInit() 
  {
    this.getCars();
  }

  getCars()
  {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

}
