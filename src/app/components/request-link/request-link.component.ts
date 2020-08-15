import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-request-link',
  templateUrl: './request-link.component.html',
  styleUrls: ['./request-link.component.css']
})
export class RequestLinkComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  key:string
  collectionId:string


  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('id')
    this.collectionId = this.route.snapshot.queryParamMap.get('collectionId')

    console.log(this.key)
    console.log(this.collectionId)
  }

}
