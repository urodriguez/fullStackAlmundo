import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { RouterHandlerComponent} from '../routerHandler/routerHandlerComponent';
import { DataSearchHandlerComponent} from '../dataSearchHandler/DataSearchHandlerComponent';
import { NameFilterComponent} from '../nameFilter/NameFilterComponent';
import { StarsFilterComponent} from '../starsFilter/StarsFilterComponent';
import { HotelComponent} from './HotelComponent';

import { HotelServices} from '../services/HotelServices';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RouterHandlerComponent,
    DataSearchHandlerComponent,
    NameFilterComponent,
    StarsFilterComponent,
    HotelComponent
  ],
  providers: [ HotelServices ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
