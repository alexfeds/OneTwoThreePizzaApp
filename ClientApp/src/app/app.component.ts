import { Message } from '../app/data/message';
import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})


export class AppComponent implements OnInit {

  batchSize = 0;
  numOfMessages = 0;
  messages: Message[];
  snapShotId: number;

  loading = true;
  display = false;
  historyOptions: any[];
  valueHistory: string;
  previousBatchNumber: number;
  totalNumOfMessages: number;

  constructor(private appService: AppService, private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
    this.historyOptions = [{ label: 'Show last batch', value: 'last' }, { label: 'Show all batches', value: 'all' }];
  }

  getMessagesBySnapShot(snapShotId?: number) {
    if (snapShotId) {
      this.snapShotId = snapShotId;
    }

    this.loading = false;
    this.display = true;
    this.showProcessingMessage();

    this.appService.getMessagesBySnapShotId(this.snapShotId).subscribe(data => {

      this.messages = data;
      this.loading = true;

    })
  }

  clearFields() {
    this.batchSize = 0;
    this.numOfMessages = 0;
  }

  postMessages() {
    if (this.snapShotId) {
      this.previousBatchNumber = this.snapShotId;
    }
    if (this.checkForNullsInput(this.batchSize))
      return;

    this.display = false;

    this.appService.postBatchToPpocess(this.batchSize, this.numOfMessages).subscribe(data => {

      this.snapShotId = data;
      this.getMessagesBySnapShot();

    })
  }


  showProcessingMessage() {
    this.messageService.add({ severity: 'info', summary: `Processed ${this.batchSize} of ${this.batchSize} batches` });
  }

  clearErrorMessages() {
    this.messageService.clear();
  }

  getMessagesHistoryChanged(event: any) {
    if (event.option.value == "all") {
      this.showHistoryAllBatches();
    } else if (event.option.value == "last") {
      this.showHistoryLastBatch();
    }

  }

  valuechange(event: any) {
    if (event) {
      this.clearErrorMessages();
    }
  }

  showHistoryAllBatches() {
    this.appService.getAllMessages().subscribe(data => {
      this.messages = data;
    })
  }

  showHistoryLastBatch() {
    console.log(this.previousBatchNumber)
    this.getMessagesBySnapShot(this.previousBatchNumber);
  }

  checkForNullsInput(batchSize: number): boolean {
    if (batchSize == null || batchSize == 0) {
      this.messageService.add({ severity: 'warn', summary: 'Batch cannot be null' });
      return true;
    } else {
      return false;
    }


  }
}
