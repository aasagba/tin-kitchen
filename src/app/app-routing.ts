import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { MediaComponent } from './media/media.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'events', component: EventsComponent },
    { path: 'media', component: MediaComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' } // redirect to homepage on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
