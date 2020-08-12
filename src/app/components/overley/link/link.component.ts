import { Component, OnInit } from '@angular/core';

import { getRequestLink } from '../../../helpers/fetchdata/request/'

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  
  key: string

  constructor() { }

  ngOnInit(): void {
    this.key
  }

}
