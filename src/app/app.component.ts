import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './service/blockchain.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blockchain-documents';
  
  constructor(private blockchain: BlockchainService) {
  }

  ngOnInit(): void {
    // this.blockchain.post("Ilya").subscribe(el => {console.log(el)});
    // this.blockchain.get().subscribe(el => {console.log(el)});
    this.blockchain.getWithKey('0x65A3aB57071C228448CE596fc25EDaca8aFeF3d8').subscribe(el => console.log(el));
  }
}
