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
}
