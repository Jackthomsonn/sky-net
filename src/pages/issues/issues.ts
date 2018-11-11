import { SocketProvider } from './../../providers/socket/socket';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-issues',
  templateUrl: 'issues.html',
})

export class IssuesPage implements OnInit {
  public requests: any[];
  public priorities: any[] = [];
  public statusFiveRequestsList: any[] = [];
  public statusOneRequestsList: any[] = [];

  constructor(private socketProvider: SocketProvider) { }

  public assignIssue = (issueId: string) => {
    this.socketProvider.emit('resolve', { issueId, socketId: window.localStorage.getItem('socketId') })
  }

  ngOnInit() {
    this.socketProvider.on('query_response', data => {
      if (data.priority === 1) {
        this.statusOneRequestsList.push(data)
      } else if (data.priority === 5) {
        this.statusFiveRequestsList.push(data)
      }
    })

    this.socketProvider.on('get_queries_response', (data) => {
      this.requests = data.queries;

      this.statusFiveRequestsList = data.queries.filter(query => query.priority === 5)
      this.statusOneRequestsList = data.queries.filter(query => query.priority === 1)
    })

    this.socketProvider.emit('get_queries', { room_id: 'node1' })
  }
}
