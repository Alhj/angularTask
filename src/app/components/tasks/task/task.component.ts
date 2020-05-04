import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { taskCollection } from '../../../models/apiTask/types'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  constructor(private router: ActivatedRoute) { }

  @Input('taskCollection') collection

  ngOnInit(): void {
    console.log(typeof(this.collection))
  }

}
