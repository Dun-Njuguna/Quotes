import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {


    userQuotes: any[];
    allNewQuote = new Quotes(0,"","","");
    @Output() addsQuote = new EventEmitter <Quotes>();
    constructor() {
      this.userQuotes = [
        new Quotes(1,"dun","Charlotte Brontë, Jane Eyre","“I am no bird; and no net ensnares me: I am a free human being with an independent will.”"),
        new Quotes(2,"dun","Charlotte Brontë, Jane Eyre","")

      ]
    }
    submitQuote() {
      this.addsQuote.emit(this.allNewQuote);
    }

    addQuote(newQuote) {
      let userLength = this.userQuotes.length;
      newQuote.id = userLength + 1;
      this.userQuotes.push(newQuote);
    }

    toogleDetails(index){
    this.userQuotes[index].showName = !this.userQuotes[index].showName;}


    ngOnInit() {

    }
}
