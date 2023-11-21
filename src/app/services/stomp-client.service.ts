import { Injectable } from '@angular/core';
import {Client, IFrame, IMessage} from "@stomp/stompjs";

@Injectable({
  providedIn: 'root'
})
export class StompClientService {

  private client: Client;

  constructor() {
    this.client = new Client({
      brokerURL: 'ws://localhost:8080/ws'
    });
  }

  public subscribe(callback: (e: IMessage) => void = (_) => {}) {
    this.client.onConnect = (frame) => this.client.subscribe('/topic/message', callback)
  }

  public activate() {
    this.client.activate();
  }

  public deactivate() {
    this.client.deactivate();
  }
}
