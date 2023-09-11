import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/interfaces/IImage';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.css']
})
export class ImagesCarouselComponent implements OnInit {

  images:Image[]=[];
  
  constructor(private imageService:ImagesService) { }

  ngOnInit(): void {
    this.getImages();
    console.log(this.images);
  }

  getImages(){
    this.images = this.imageService.getImages();
  }

}
