import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string

  show: boolean

  status: boolean

  setMessage(message: string): void {
    this.message = message
    this.show = true
  }

  removeMessage(): void {
    setTimeout(() => {
      this.message = ''
      this.show = false
    }, 10000)
  }

  setStatus(status: boolean): void {
    this.status = status
  }
}
