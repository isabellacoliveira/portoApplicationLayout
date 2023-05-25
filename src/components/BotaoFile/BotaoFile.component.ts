import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-BotaoFile',
  templateUrl: './BotaoFile.component.html',
  styleUrls: ['./BotaoFile.component.css']
})
export class BotaoFileComponent implements OnInit {
  @Output() OnClickApplyPDFButton: EventEmitter<void> =
    new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
