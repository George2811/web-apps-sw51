import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgForm} from "@angular/forms";
import {Event} from "../../models/event";
import{Router,ActivatedRoute} from "@angular/router";
import {EventsApiService} from "../../services/events-api.service";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-new-event-form',
  templateUrl: './new-event-form.component.html',
  styleUrls: ['./new-event-form.component.css']
})
export class NewEventFormComponent implements OnInit {

  title = 'event-uploader';
  eventForm : FormGroup;
  eventData: Event = {} as Event;
  strongPasswordPattern: string = "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  links: string[] = [];
  constructor(private eventsApi:EventsApiService,private formBuilder: FormBuilder) {
    this.eventForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(50)]],
      description: [null, [Validators.required, Validators.maxLength(300) ]],
      links:[null, [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      cost: [null, [Validators.required]],
      dateStart: [null, [Validators.required]],
      dateEnd: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.eventForm.invalid) {
      return;
    }
    console.log(this.eventForm.value);
  }

  addEvent(): void{
    const newEvent = { title: this.eventData.title,
      description: this.eventData.description,
      dateStart: this.eventData.dateStart,
      dateEnd: this.eventData.dateEnd,
      cost: this.eventData.cost}
    this.eventsApi.addEvent(1,newEvent).
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
