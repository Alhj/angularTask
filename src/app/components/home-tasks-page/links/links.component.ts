import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { ICollectionInfo } from '../../../models/types/types'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
@Input("tasks") tasks : ICollectionInfo

  constructor() { }

  ngOnInit(): void {
  }

}
