import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment.prod';
import {AngularFirestore} from 'angularfire2/firestore'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FirebaseService} from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase,"todoangular"),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
