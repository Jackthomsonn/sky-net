import { SocketProvider } from './../../providers/socket/socket';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

import { Keyboard } from '@ionic-native/keyboard';

@IonicPage()

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})

export class MessagesPage implements OnInit {
  public messages: any[] = [];
  public suggestions: any[] = [];
  public data: any;
  public message: string;

  @ViewChild('chatWindow') private chatWindow: ElementRef;

  constructor(
    private keyboard: Keyboard,
    private socketProvider: SocketProvider) {
  }

  public sendMessage = () => {
    if (this.message === undefined) {
      return;
    }

    if(this.message === "") {
      return;
    }

    this.scrollToBottom();
    this.messages.push({
      content: this.message,
      sender: true
    })

    const socketId = JSON.parse(window.localStorage.getItem('socketId'))

    this.socketProvider.emit('query', {
      message: this.message,
      socketId: socketId ? socketId.current_socket_id : undefined
    })

    this.message = "";
  }

  public sendSuggestion = (suggestion: string, sender: boolean) => {
    this.messages.push({ content: suggestion, sender: sender });
    this.scrollToBottom();

    const socketId = JSON.parse(window.localStorage.getItem('socketId'))

    this.socketProvider.emit('query', {
      message: suggestion,
      socketId: socketId ? socketId.current_socket_id : undefined
    })
  }

  private scrollToBottom = () => {
    this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
  }

  ngOnInit() {
    this.suggestions.push({
      content: 'Broken Window',
      sender: true
    }, {
        content: 'Ramp Assistance',
        sender: true
      })

    this.socketProvider.on('query_response', (data) => {
      this.messages.push({
        content: data.title,
        sender: false
      })

      this.scrollToBottom();

      window.localStorage.setItem('socketId', JSON.stringify(data))
    })
  }
}
