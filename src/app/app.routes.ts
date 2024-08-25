import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';

export const routes: Routes = [
    {path:"", component:CarComponent},
    {path:"cars", component:CarComponent},
    {path:"cars/brand/:brandId", component:CarComponent}
];
