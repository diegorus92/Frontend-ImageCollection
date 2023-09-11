import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagesService } from 'src/app/services/images.service';


@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {

  imageForm = this.formBuilder.group({
    imageFile: [],
    description: ['']
  });

  constructor(private formBuilder:FormBuilder, private imageService:ImagesService) { }


  ngOnInit(): void {

  }


  onSubmit(event:Event):void{
    event.preventDefault();

    console.log(this.imageForm.value['imageFile']);

    this.imageService.saveImage(this.imageForm.value);
  }
}
