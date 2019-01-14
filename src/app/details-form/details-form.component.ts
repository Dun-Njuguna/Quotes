import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {

  allNewQuote = new Quotes("","","","");
  @Output() addsQuote = new EventEmitter <Quotes>();
  constructor() {
   }
  submitQuote() {
    this.addsQuote.emit(this.allNewQuote);
    console.log("Form Submitted!");
    console.log(this.allNewQuote);
  }
  ngOnInit() {
  }

}
