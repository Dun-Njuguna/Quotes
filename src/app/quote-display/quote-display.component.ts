import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']

})


export class QuoteDisplayComponent implements OnInit {
    public count: number = 0;
    public coun: number = 0;
    userQuotes: any[];
    constructor() {
        this.userQuotes= [
          new Quotes(1,"dun","Charlotte Brontë Jane Eyre","“I am no bird; and no net ensnares me: I am a free human being with an independent will.”"),
          new Quotes(2,"duncan","Jane Eyre","ghbnjmk,., mknjbhvgfcvgbhnjmk,l.;,lmknj"),
        ]
    }
    addQuote(newQuote) {
      let userLength = this.userQuotes.length;
      newQuote.id = userLength+1;
      this.userQuotes.push(newQuote);
      console.log(this.userQuotes);
    }

    toogleDetails(index){
    this.userQuotes[index].showName = !this.userQuotes[index].showName;}

    upVote(i){
        this.count += 1;
    }
    downVote(i){
      this.coun -=1;
    }
    ngOnInit() {

    }
}
