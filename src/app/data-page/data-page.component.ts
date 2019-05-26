import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.scss']
})
export class DataPageComponent implements OnInit {
  data = {
    id : '0x65A3aB57071C228448CE596fc25EDaca8aFeF3d8',
    object : '"Ilya"',
  };
  constructor() { }

  ngOnInit() {
  }

}
