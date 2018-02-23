// tslint:disable-next-line:import-spacing
import { NgModule }       from '@angular/core';
// tslint:disable-next-line:import-spacing
import { BrowserModule }  from '@angular/platform-browser';
// tslint:disable-next-line:import-spacing
import { FormsModule }    from '@angular/forms';
// tslint:disable-next-line:import-spacing
import { HttpClientModule }    from '@angular/common/http';
// tslint:disable-next-line:import-spacing
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// tslint:disable-next-line:import-spacing
import { InMemoryDataService }  from './in-memory-data.service';
// tslint:disable-next-line:import-spacing
import { AppRoutingModule }     from './app-routing.module';
// tslint:disable-next-line:import-spacing
import { AppComponent }         from './app.component';
// tslint:disable-next-line:import-spacing
import { DashboardComponent }   from './dashboard/dashboard.component';
// tslint:disable-next-line:import-spacing
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
// tslint:disable-next-line:import-spacing
import { HeroesComponent }      from './heroes/heroes.component';
// tslint:disable-next-line:import-spacing
import { HeroSearchComponent }  from './hero-search/hero-search.component';
// tslint:disable-next-line:import-spacing
import { HeroService }          from './hero.service';
// tslint:disable-next-line:import-spacing
import { MessageService }       from './message.service';
// tslint:disable-next-line:import-spacing
import { MessagesComponent }    from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
