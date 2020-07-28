import { Component, AfterViewChecked } from '@angular/core';
import { Input } from '@angular/core'

import { IRequestCollection } from '../../../models/apiTask/types'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements AfterViewChecked {
  @Input('requestList') request : IRequestCollection[]
  constructor() { }
  ngAfterViewChecked(): void {
   
  }

  ngOnInit(): void {
  }

}
