import { SocketProvider } from './../../providers/socket/socket';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html',
})

export class RequestsPage implements OnInit {
  public requests: any[];

  constructor(private socketProvider: SocketProvider) {
  }

  public raiseIssue = (message: string) => {
    this.socketProvider.emit('query', {
      message: message,
      createdBy: window.localStorage.getItem('socketId')
    })
  }

  ngOnInit() {
    this.socketProvider.on('query_response', data => {
      this.requests = data;
    })
  }
}
