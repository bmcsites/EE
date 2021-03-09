import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import {SeHeaderComponent} from './shared/components/se-header/se-header.component';
import {DropDownComponent} from './shared/components/drop-down/drop-down.component';
import {ShowAlbumComponent} from './components/show-album/show-album.component';
import {HttpService} from './shared/services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeHeaderComponent,
    DropDownComponent,
    ShowAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
