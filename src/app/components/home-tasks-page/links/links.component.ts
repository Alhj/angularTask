import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'

import { ICollectionInfo } from '../../../models/types/types'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  @Input("tasks") tasks: ICollectionInfo
  @Output("dealteOverlay") delate: EventEmitter<ICollectionInfo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDealte(): void 
  { 
    this.delate.emit(this.tasks)
  }

}
