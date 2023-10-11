import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomButtonComponent } from './components/atoms/atom-button/atom-button.component';
import { AtomInputfieldComponent } from './components/atoms/atom-inputfield/atom-inputfield.component';
import { MoleculeLoginComponent } from './components/molecules/molecule-login/molecule-login.component';

@NgModule({
  declarations: [AppComponent, AtomButtonComponent, AtomInputfieldComponent, MoleculeLoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
