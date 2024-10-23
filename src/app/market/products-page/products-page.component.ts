import { Component } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  categories: Category[] = [
    { id: 1, name: 'Space Marines' },
    { id: 2, name: 'Ork' },
    { id: 3, name: 'Chaos Space Marine' },
    { id: 4, name: 'Sisters of Battle' },
    { id: 5, name: 'Tau' }
  ];

  selectedCategory: Category | null = null;

  onCategorySelected(category: Category) {
    this.selectedCategory = category;
    alert(`Selected Category: ${category.name}`);
  }
}