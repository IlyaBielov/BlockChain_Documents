import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './form-for-add-file.component.html',
  selector: 'app-form-for-add-file',
  styleUrls: ['./form-for-add-file.component.scss']
})
export class FormForAddFileComponent implements OnInit {
  formSendFile: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSendFile = this.fb.group({
      file: null,
      caption: ['', Validators.required]
    });
  }

  sendFile() {
    console.log('send: ', this.formSendFile.value);
  }
}
