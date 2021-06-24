import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-open-file-dialog',
  templateUrl: './open-file-dialog.component.html',
  styleUrls: ['./open-file-dialog.component.css']
})
export class OpenFileDialogComponent implements OnInit {
  @Input() requiredFileType = "";
  @Input() message = "";
  @Output() sendImageEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (_event) => {
        this.sendImageEvent.emit(reader.result);
      }
    }
  }
}
