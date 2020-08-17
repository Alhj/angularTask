import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { getCollectionName } from '../../helpers/fetchdata/info'

@Component({
  selector: 'app-request-link',
  templateUrl: './request-link.component.html',
  styleUrls: ['./request-link.component.css']
})
export class RequestLinkComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  key:string
  collectionId:string
  collectionName:string

  async ngOnInit(): Promise<void> {
    this.key = this.route.snapshot.paramMap.get('id')
    this.collectionId = this.route.snapshot.queryParamMap.get('collectionId')
    this.collectionName = await getCollectionName(this.collectionId)
  }

  async onJoin(): Promise<void> {
    console.log('accept')
  }

  onDecline(): void {
    console.log('back')
  }

}
