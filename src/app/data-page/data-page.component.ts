import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../service/blockchain.service';

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.scss']
})
export class DataPageComponent implements OnInit {
  form: boolean = true;
  hash: string;
  dataHash: string;
  data: string;

  constructor(private blockchain: BlockchainService) { }

  ngOnInit() {
  }

  send() {
    if(this.hash != null && this.hash != undefined) {
      this.blockchain.getWithKey(this.hash).subscribe((el) => {
        this.form = false;
        this.dataHash = JSON.stringify(el.id);
        this.data = JSON.stringify(el.object);
      }
      );
    }
  }
}
