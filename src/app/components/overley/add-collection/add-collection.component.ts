import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms'

import { genereateCollection } from '../../../helpers/create/createCollection';
import { tasks } from '../../../models/apiTask/types';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  @Output() closeWindow: EventEmitter<boolean> = new EventEmitter();
  @Output() addColl: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  addCollectionForm = this.fb.group({
    name: ''
  })


  onClickClose() {
    this.closeWindow.emit(true);
  }


  onSubmit(collectionData) {
    const coll: tasks = genereateCollection(collectionData.name);

    this.addColl.emit(coll);
  }
}
