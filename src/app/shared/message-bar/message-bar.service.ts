import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MessageModel} from './models/message.model';
import {ModelTypeEnum} from './models/model-type.enum';

@Injectable()
export class MessageBarService {

  private messageBarSubject: Subject<any> = new Subject<any>();
  public messageBar$: Observable<MessageModel> = this.messageBarSubject.asObservable();

  constructor() {
  }

  public sendToast(data: MessageModel) {
    this.messageBarSubject.next(data);
  }

  public createModel(message: string, type: ModelTypeEnum): MessageModel {
    return {message, type};
  }
}
