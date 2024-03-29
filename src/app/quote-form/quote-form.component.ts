import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quotes } from '../quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  newQuote = new Quotes(0, "", "", "", new Date());

  @Output() addQuote = new EventEmitter <Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0, "", "", "", new Date());
  }
  constructor() { }

  ngOnInit() {
  }

}
