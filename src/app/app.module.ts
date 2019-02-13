import { appReducers } from './store/reducers/app.reducers';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from './../environments/environment.prod';
import { EffectsModule } from '@ngrx/effects';
import { appEffects } from './store/effects/app.effects';
import { ConfigComponent } from './config/config.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { TodoFilterSwitcherComponent } from './todo-filter-switcher/todo-filter-switcher.component';
import { TodoNewTaskComponent } from './todo-new-task/todo-new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    TodoListComponent,
    TodoElementComponent,
    TodoFilterSwitcherComponent,
    TodoNewTaskComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
