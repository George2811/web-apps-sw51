import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgForm} from "@angular/forms";
import {Artwork} from "../../models/artwork";
import{Router,ActivatedRoute} from "@angular/router";
import {ArtworksApiService} from "../../services/artworks-api.service";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-new-artwork-form',
  templateUrl: './new-artwork-form.component.html',
  styleUrls: ['./new-artwork-form.component.css']
})
export class NewArtworkFormComponent implements OnInit {

  title = 'file-uploader';
  artworkForm : FormGroup;
  artworkData: Artwork = {} as Artwork;
  strongPasswordPattern: string = "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  links: string[] = [];
  constructor(private artworksApi:ArtworksApiService,private formBuilder: FormBuilder) {
    this.artworkForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(50)]],
      description: [null, [Validators.required, Validators.maxLength(240) ]],
      links:[null, [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      cost: [null, [Validators.required]]
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

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our link
    if (value) {
      this.links.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: string): void {
    const index = this.links.indexOf(fruit);
    if (index >= 0) {
      this.links.splice(index, 1);
    }
  }


}
