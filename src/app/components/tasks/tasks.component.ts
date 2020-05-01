import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

import { findTasks } from '../../helpers/fetchdata/fetchTasksMok';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  constructor(private router: ActivatedRoute) { }

  id;

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id = params.get('tasksID')
    })

    console.log(this.id)

  }
}
