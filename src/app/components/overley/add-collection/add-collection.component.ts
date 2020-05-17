import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms'

import { createCollection } from '../../../helpers/fetchdata/collection/createCollection'

import { genereateCollection } from '../../../helpers/create/create';
import { ICreateTasks } from '../../../models/apiTask/types';



interface IFbGruop {
  name: string
}

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


  async onSubmit(collectionData: IFbGruop): Promise<void> {
    const coll: ICreateTasks = genereateCollection(collectionData.name);

    const resWork: boolean = await createCollection(coll)
    if (resWork) {
      this.addColl.emit();
    }

  }
}
