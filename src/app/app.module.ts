import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { TimePipe } from './time.pipe';
import { VoteDirective } from './vote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDisplayComponent,
    QuoteDetailsComponent,
    DetailsComponent,
    DetailsFormComponent,
    TimePipe,
    VoteDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
