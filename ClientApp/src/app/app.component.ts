
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



  constructor(private appService: AppService, private messageService: MessageService) { }

  ngOnInit() {
    


  }
}
