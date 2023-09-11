import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AppComponent } from './app.component';
import { ImageFormComponent } from './components/image-form/image-form.component';
import { ImagesCarouselComponent } from './components/images-carousel/images-carousel.component';

const routes: Routes = [
  {path: "", component:PrincipalComponent},
  {path: "form", component:ImageFormComponent},
  {path: "carousel", component:ImagesCarouselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
