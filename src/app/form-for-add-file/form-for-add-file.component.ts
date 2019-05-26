import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { BlockchainService } from '../service/blockchain.service';

@Component({
  templateUrl: './form-for-add-file.component.html',
  selector: 'app-form-for-add-file',
  styleUrls: ['./form-for-add-file.component.scss']
})
export class FormForAddFileComponent implements OnInit {
  private file: File | null = null;
  loading: boolean;
  myData = null;
  Hash: string;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    this.file = event && event.item(0);
  }

  constructor(private host: ElementRef<HTMLInputElement>, private blockchain: BlockchainService) { }

  ngOnInit() {
  }

  processFile(imageInput: any) {
    console.log(imageInput);
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    this.getBase64(file).then(
      data => {
        console.log(data);
        this.myData = data;
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
      const reader = new FileReader();
      reader.readAsDataURL(fileForUpdating);
      reader.onload = () => {
        resolve(reader.result);
      }
      reader.onerror = error => reject(error);
    });
  }
  
  sendFile() {
    this.loading = true;
    if (this.myData) {
      this.blockchain.post(this.myData).subscribe(el => {
        this.Hash = el[1];
        // alert('This is your own key: ' + el[1]);
        this.loading = false;
      });
    }
  }
}
