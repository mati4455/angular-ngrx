import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StateModule } from './modules/state/state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StateModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
