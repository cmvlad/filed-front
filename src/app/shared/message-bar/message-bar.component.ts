import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageModel} from './models/message.model';
import {MessageBarService} from './message-bar.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent implements OnInit, OnDestroy {

  private messageObject: MessageModel;
  private messageBarServiceSubscription: Subscription;

  constructor(private messageBarService: MessageBarService) {
  }

  ngOnInit() {
    this.messageBarServiceSubscription = this.messageBarService.messageBar$.subscribe(async message => {
      this.messageObject = message;
      await this.delay(2000);
      this.messageObject = new MessageModel();
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnDestroy(): void {
    this.messageBarServiceSubscription.unsubscribe();
  }

}
