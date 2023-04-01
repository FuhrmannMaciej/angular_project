import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssInputComponent } from './css-input/css-input.component';
import { CssPreviewComponent } from './css-preview/css-preview.component';
import { CssCodeGeneratedComponent } from './css-code-generated/css-code-generated.component';

@NgModule({
  declarations: [
    AppComponent,
    CssInputComponent,
    CssPreviewComponent,
    CssCodeGeneratedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
