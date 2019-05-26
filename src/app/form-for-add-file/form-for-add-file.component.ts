import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './form-for-add-file.component.html',
  selector: 'app-form-for-add-file',
  styleUrls: ['./form-for-add-file.component.scss']
})
export class FormForAddFileComponent implements OnInit {
  formSendFile: FormGroup;
  private file: File|null = null;
  loading: boolean;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.file = event && event.item(0);
  }

  constructor(private fb: FormBuilder, private host: ElementRef<HTMLInputElement>) { }

  ngOnInit() {
    this.formSendFile = this.fb.group({
      file: null,
      caption: ['', Validators.required]
    });

    this.formSendFile.valueChanges.subscribe(data => {
      console.log(data.file);
      if (data.file[0]) {
        this.uploadFile(data.file[0]);
      }
    });
  }

    processFile(imageInput: any) {
    console.log(imageInput);
      const file: File = imageInput.files[0];
      const reader = new FileReader();
      this.getBase64(file).then(
        data => {
          console.log(data);
          return data;
        }
      );
      reader.addEventListener('load', (event: any) => {

        this.getBase64(event.target.result).then(
          data => {
            console.log(data);
            return data;
          }
        );
      });
    }
    uploadFile(files: FileList) {
      if (files.length === 0) {
        console.log('No file selected!');
      } else {
        const file: File = files[0];

        return this.getBase64(file).then(
          data => {
            console.log(data);
            // this data send to server
            return data;
          }
        );
      }
  }

  getBase64(fileForUpdating) {
    return new Promise((resolve, reject) => {
      console.log(1);
      const reader = new FileReader();
      reader.readAsDataURL(fileForUpdating);
      reader.onload = () => {
        console.log(33);
        resolve(reader.result);
      }
      reader.onerror = error => reject(error);
    });
  }
  sendFile() {
    const formModel = this.formSendFile.value;
    this.loading = true;
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000);
    console.log('send: ', this.formSendFile.value);
  }

}
