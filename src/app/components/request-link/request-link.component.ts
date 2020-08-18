import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { getCollectionName } from '../../helpers/fetchdata/info'
import { acceptLink } from '../../helpers/fetchdata/request'
import { MessageService } from '../../message/message.service'

@Component({
  selector: 'app-request-link',
  templateUrl: './request-link.component.html',
  styleUrls: ['./request-link.component.css']
})
export class RequestLinkComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService) { }

  key: string
  collectionId: string
  collectionName: string
  isLoading: boolean

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('name')) {
      this.key = this.route.snapshot.paramMap.get('id')
      this.collectionId = this.route.snapshot.queryParamMap.get('collectionId')
      this.collectionName = await getCollectionName(this.collectionId)
      this.isLoading = false
    } else {
      this.router.navigate(['/'])
    }
  }

  async onJoin(): Promise<void> {
    const acceptLinkRequest: boolean = await acceptLink(this.key, this.collectionId)

      const url: string = `/tasks/${this.collectionId}`
      this.messageService.setMessage(acceptLinkRequest ?'you have been added to collection' : 'somthing whent wrong or you are a user in the collection', acceptLinkRequest)

    this.router.navigate([acceptLinkRequest ? url : '/'])
  }

  onDecline(): void {
    this.router.navigate(['/'])
  }

}
