import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PersonaContainerComponent } from './components/persona-container/persona-container.component';
import { PersonaItemComponent } from './components/persona-item/persona-item.component';
import { AddPersonaComponent } from './components/add-persona/add-persona.component';
import { UpdatePersonaComponent } from './components/update-persona/update-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    PersonaContainerComponent,
    PersonaItemComponent,
    AddPersonaComponent,
    UpdatePersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
