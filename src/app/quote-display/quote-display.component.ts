import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {Quotes} from '../quotes';
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  userQuotes:  any[];
  allNewQuote = new Quotes(0,"","","","");
  @Output() addQuote = new EventEmitter<Quotes>();
  constructor() {
    this.userQuotes = [
      new Quotes(),
    ]
   }
   submitQuote(){
     this.addQuote.emit(this.allNewQuote);
   }
   addQuote(newQuote){
     let userLength = this.userQuotes.length;
     newQuote.id = userLength+1;
     // newQuote.name = "dun";
     // newQuote.auther = "dun";
     // newQuote.quote= "dun";
     // newQuote.description = "dun";
     this.userQuotes.push(newQuote);
   }
  ngOnInit() {
  }

}
