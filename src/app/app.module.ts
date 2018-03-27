import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TehnologiesService } from './tehnologies.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TehnologyListComponent } from './tehnology-list/tehnology-list.component';
import { TehnologyDetailComponent } from './tehnology-detail/tehnology-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TehnologyListComponent,
    TehnologyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TehnologiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
