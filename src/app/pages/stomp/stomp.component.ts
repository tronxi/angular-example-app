import {Component, OnDestroy, OnInit} from '@angular/core';
import {StompClientService} from "../../services/stomp-client.service";

@Component({
  selector: 'app-stomp',
  templateUrl: './stomp.component.html',
  styleUrls: ['./stomp.component.css']
})
export class StompComponent implements OnInit, OnDestroy {
  event: string;

  constructor(private stompClientService: StompClientService) {
    this.event = "";
  }

  ngOnInit(): void {
    this.stompClientService.subscribe((e) => this.event = e.body);
    this.stompClientService.activate();
  }

  ngOnDestroy(): void {
    this.stompClientService.deactivate();
  }
}
