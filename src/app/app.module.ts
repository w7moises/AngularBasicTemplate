import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OutcomesComponent } from './components/outcomes/outcomes.component';
import { HomeComponent } from './components/home/home/home.component';
import { CreateOutcomeComponent } from './components/outcomes/create/create-outcome/create-outcome.component';

@NgModule({
  declarations: [
    AppComponent,
    OutcomesComponent,
    HomeComponent,
    CreateOutcomeComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
