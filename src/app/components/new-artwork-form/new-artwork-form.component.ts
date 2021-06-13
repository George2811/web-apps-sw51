import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgForm} from "@angular/forms";
import {Artwork} from "../../models/artwork";
import{Router,ActivatedRoute} from "@angular/router";
import {ArtworksApiService} from "../../services/artworks-api.service";

@Component({
  selector: 'app-new-artwork-form',
  templateUrl: './new-artwork-form.component.html',
  styleUrls: ['./new-artwork-form.component.css']
})
export class NewArtworkFormComponent implements OnInit {

  artworkForm : FormGroup;
  artworkData: Artwork = {} as Artwork;

  constructor(private artworksApi:ArtworksApiService,private formBuilder: FormBuilder) {
    this.artworkForm = this.formBuilder.group({

    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.artworkForm.invalid) {
      return;
    }
    console.log(this.artworkForm.value);
  }

  addArtwork(): void{
    const newArtwork = { title: this.artworkData.title,
      description: this.artworkData.description,
      cost: this.artworkData.cost,
      linkInfo: this.artworkData.linkInfo}
    this.artworksApi.addArtwork(1,newArtwork).
    subscribe();
  }



}
