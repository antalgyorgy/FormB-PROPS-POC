import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParamsComponent } from './components/params/params.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

const monacoConfig: NgxMonacoEditorConfig = {
    baseUrl: './assets',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: () => {
        console.log((<any>window).monaco);
    }
  };

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AttributeComponent,
    ParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
  ],
  providers: [NgModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
