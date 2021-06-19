import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Specialty} from "../../models/specialty";

@Component({
  selector: 'app-hobbyist-profile',
  templateUrl: './hobbyist-profile.component.html',
  styleUrls: ['./hobbyist-profile.component.css']
})
export class HobbyistProfileComponent implements OnInit {

  specialties: Object[] = ['Pintura','Escultura','Canto','Danza','Teatro','Producción','Cine'];
  selected: boolean[] = [true, false, false, true, false, true];
  loginForm: FormGroup;
  strongPasswordPattern: string = "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email ]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(this.strongPasswordPattern)]]
    });
  }
  ngOnInit(): void {
  }
  artists: Object[] = [
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 8,
      followers: 150
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 50,
      followers: 150
    },
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 50,
      followers: 390
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 15,
      followers: 250
    },
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 10,
      followers: 150
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 16,
      followers: 210
    },
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 10,
      followers: 150
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 16,
      followers: 210
    }
  ];
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }
}
