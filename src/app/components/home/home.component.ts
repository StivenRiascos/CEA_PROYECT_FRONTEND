import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Animal {
  name: string;
  species: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Definir el tipo correctamente
  featuredAnimals: Animal[] = [
    { name: 'Tigre', species: 'Panthera tigris' },
    { name: 'León', species: 'Panthera leo' },
    { name: 'Jaguar', species: 'Panthera onca' },
  ];
}
