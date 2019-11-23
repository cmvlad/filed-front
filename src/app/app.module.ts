import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MessageBarComponent} from './shared/message-bar/message-bar.component';
import {MessageBarService} from './shared/message-bar/message-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MessageBarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
