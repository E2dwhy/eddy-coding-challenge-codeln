
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import {provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';

const firebaseConfig = {
  apiKey: "AIzaSyBvve70dSFcnEKZGIeXVa7msznodJD-5jU",
  authDomain: "codeln-coding-challenge.firebaseapp.com",
  projectId: "codeln-coding-challenge",
  storageBucket: "codeln-coding-challenge.appspot.com",
  messagingSenderId: "765484825106",
  appId: "1:765484825106:web:0ae237ed1da4ef29eaf6cb",
  measurementId: "G-BTYK0H81HH"
};


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    AppSidebarComponent,
    provideFirebaseApp(() =>initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
