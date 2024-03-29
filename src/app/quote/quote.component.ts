import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'quote';

  quotes: Quotes [] = [

    new Quotes (1, 'Zig Ziglar', "'If you can dream it, you can achieve it.'", 'Steven Seagal', new Date(2019, 9 , 26)),
    new Quotes (2, 'Maya Angelou', "'Success comes by loving yourself, loving what you do and loving how you do it.'", 'John Smith', new Date(2019,9,9)),
    new Quotes (3, 'Donald Trump', "'As long as you are going to be thinking, think big.'", 'Jon Ho', new Date(2019,2,9)),
  ]

  addNewGoal(quote){
    let quotesLength = this.quotes.length;
    quote.index = quotesLength+1;
    quote.datePost = new Date (quote.datePost);
    this.quotes.unshift(quote);
  }

  unWanted(isDeleted, index){
    if (isDeleted){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() {

   }

  ngOnInit() {
  }

}


