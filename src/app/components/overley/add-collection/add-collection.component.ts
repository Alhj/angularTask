import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {
  constructor() { }

  @Output() closeWindow: EventEmitter<boolean> = new EventEmitter()

  ngOnInit(): void {
  }

  onClickClose() {
    this.closeWindow.emit(true);
   }
}
