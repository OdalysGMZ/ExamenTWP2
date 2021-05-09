import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaComponent } from './acerca/acerca.component';

const routes: Routes = [
  { path: 'reviews-component', component: ReviewsComponent },
  { path: 'contacto-component', component: ContactoComponent },
  { path: 'acerca-component', component: AcercaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
