import {Component, OnInit} from '@angular/core';
import {MessageModel} from './models/message.model';
import {MessageService} from 'primeng/api';
import {MessageBarService} from './message-bar.service';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent implements OnInit {

  private messageObject: MessageModel;

  constructor(private messageBarService: MessageBarService) {
  }

  ngOnInit() {
    this.messageBarService.messageBar$.subscribe(async message => {
      this.messageObject = message;
      await this.delay(2000);
      this.messageObject = new MessageModel();
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
