import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  constructor(private brandService:BrandService) {}

  brands:Brand[] = [];
  currentBrand:Brand;

  ngOnInit()
  {
    this.getBrands();
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    })
  }

  setCurrentBrand(brand:Brand)
  {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand)
  {
    if(brand == this.currentBrand)
    {
      return "list-group-item active";
    }
    else return "list-group-item";
  }

  getAllBrandClass()
  {
    if(!this.currentBrand)
    {
      return "list-group-item active";
    }
    else
    {
      return "list-group-item";
    }
  }
}
