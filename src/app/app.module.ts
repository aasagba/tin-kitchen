import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app-routing';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MediaComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
