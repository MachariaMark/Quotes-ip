import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesPipe } from './quotes.pipe';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { LikeComponent } from './like/like.component';
import { DislikeComponent } from './dislike/dislike.component';
import { FeaturedquoteComponent } from './featuredquote/featuredquote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesPipe,
    QuoteComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    LikeComponent,
    DislikeComponent,
    FeaturedquoteComponent
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
