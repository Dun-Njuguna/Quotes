import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']

})


export class QuoteDisplayComponent implements OnInit {
  userQuotes: any[];
  @Output() isComplete = new EventEmitter<boolean>();
  constructor() {
    this.userQuotes = [
      new Quotes(1, "dun", "Charlotte Brontë Jane Eyre", "“I am no bird; and no net ensnares me: I am a free human being with an independent will.”", 0, 0),
      new Quotes(2, "duncan", "Jane Eyre", "ghbnjmk,., mknjbhvgfcvgbhnjmk,l.;,lmknj", 0, 0),
    ]
  }
  addQuote(newQuote) {
    let userLength = this.userQuotes.length;
    newQuote.id = userLength + 1;
    this.userQuotes.push(newQuote);
    console.log(this.userQuotes);
  }

  toogleDetails(index) {
    this.userQuotes[index].showName = !this.userQuotes[index].showName;
  }

  goalDelete(i) {
      this.userQuotes.splice(i, 1);
  }

  upVote(i) {
    this.userQuotes[i].vote += 1;
  }
  downVote(i) {
    this.userQuotes[i].dvote += 1;
  }
  ngOnInit() {

  }
}
