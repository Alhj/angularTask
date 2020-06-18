import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'

import { ICollectionInfo } from '../../../models/types/types'

@Component({
  selector: 'app-delate-sure',
  templateUrl: './delate-sure.component.html',
  styleUrls: ['./delate-sure.component.css']
})
export class DelateSureComponent implements OnInit {
  @Input('CollectionInfo') collectionInfo : ICollectionInfo

  
  constructor() { }

  ngOnInit(): void {
  }

}
