import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  constructor(private brandService:BrandService) {}

  brands:Brand[] = [];

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
}
