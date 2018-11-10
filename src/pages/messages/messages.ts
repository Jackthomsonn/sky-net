import { TestProvider } from './../../providers/test/test';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';

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
  public showSmallKeyboard: boolean;
  public message: string;

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(
    private keyboard: Keyboard,
    private testProvider: TestProvider) {
  }

  public sendMessage = () => {
    this.scrollToBottom();
    this.messages.push({
      content: this.message,
      sender: true
    })

    this.message = "";
  }

  public sendSuggestion = (suggestion: string, sender: boolean) => {
    this.messages.push({ content: suggestion, sender: sender });
    this.scrollToBottom();
  }

  private scrollToBottom = () => {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  ngOnInit() {
    this.testProvider.getTestResoponse().subscribe(data => {
      this.data = data;
    }, (error) => {
      this.data = 'Hello'
    })

    this.suggestions.push({
      content: 'Broken Window',
      sender: true
    }, {
        content: 'Train arrival time',
        sender: false
      })
  }
}
