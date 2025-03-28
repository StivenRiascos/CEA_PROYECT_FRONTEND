import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { VisitComponent } from './components/visit/visit.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'animales', component: AnimalsComponent },
  { path: 'visitanos', component: VisitComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
