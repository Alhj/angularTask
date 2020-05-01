import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  id;

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id = params.get('tasksID')
    })

    console.log(this.id)
  }

}
