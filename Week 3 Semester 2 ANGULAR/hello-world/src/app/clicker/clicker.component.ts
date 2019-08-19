import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  @Input() startCount: number;

  name : string = "Gevin";

  count : number = 0; 

  constructor() { }

  ngOnInit() {
    // this.name = this.startName;
  }

  onAddButtonClick() {
    this.count++;
  }	

  onMinusButtonClick() {
    this.count--;
  }
}