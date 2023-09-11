import { Injectable } from '@angular/core';
import { IMAGES } from 'src/fake_data/FakeImages';
import { Image } from 'src/interfaces/IImage';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private _fakeImages:Image[] = IMAGES;

  constructor() { }

  getImages(){
    return this._fakeImages;
  }

  saveImage(newImage:any):void{
    console.log(newImage);
    const image:Image = {
      ImageId: 0,
      Name: "",
      Extension: "jpg",
      Description: newImage.description,
      Path: newImage.imageFile
    }
    console.log(image);
    this._fakeImages.push(image);
  }

}
