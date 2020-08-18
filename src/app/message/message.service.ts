import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string

  show: boolean

  status: boolean

  private timeOutStart: Boolean = false

  setMessage(message: string, status: boolean): void {
    this.message = message
    this.show = true
    this.status = status
  }

  removeMessage(): void {
    if (!this.timeOutStart) {
      this.timeOutStart = true

      setTimeout(() => {
        this.resetMessage()
      }, 10000)
    }
  }

  

  private resetMessage(): void {
    this.message = ''

    this.show = false

    this.timeOutStart = false
  }
}
