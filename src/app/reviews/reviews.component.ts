import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  califs: Number[] = [];
  fecha: Date[] = [];


  titulo = ["Little Nightmares II", "Hyrule Warriors: Age of Calamity", "Final Fantasy VII Remake", "Death Stranding", "Far Cry New Dawn"];
  cal = [8, 8, 10, 9, 6];

  constructor() { 

  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.califs[i] = 0;
    }
    this.fecha[0] = new Date(2020, 12, 9);
    this.fecha[1] = new Date(2020, 11, 20);
    this.fecha[2] = new Date(2020, 4, 10);
    this.fecha[3] = new Date(2019, 11, 8);
    this.fecha[4] = new Date(2019, 2, 14);
  }

}
