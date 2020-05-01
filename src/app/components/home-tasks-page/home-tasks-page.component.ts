import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-tasks-page',
  templateUrl: './home-tasks-page.component.html',
  styleUrls: ['./home-tasks-page.component.css']
})
export class HomeTasksPageComponent implements OnInit {
  constructor(private router: ActivatedRoute) { }

  isLoading: boolean = true;

  async ngOnInit(): Promise<void> {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }

}
