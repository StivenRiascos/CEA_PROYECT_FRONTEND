import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Secciones colapsables
  activeSection: string | null = 'generalidades'; // Por defecto abrimos la primera sección

  toggleSection(section: string): void {
    this.activeSection = this.activeSection === section ? null : section;
  }

  isSectionActive(section: string): boolean {
    return this.activeSection === section;
  }
}