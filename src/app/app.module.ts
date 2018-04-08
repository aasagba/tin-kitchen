import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app-routing';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { EventsComponent } from './events/events.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAoNeswoDqEloGh6Yg6vBL4cp1TKBFz73o'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
