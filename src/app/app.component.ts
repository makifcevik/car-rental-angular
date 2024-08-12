import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from "./components/color/color.component";
import { CarComponent } from './components/car/car.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrandComponent, ColorComponent, CarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-rental-angular';
}
