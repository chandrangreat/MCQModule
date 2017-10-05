import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McqPlayerComponent } from './mcq-player.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdRadioModule
  ],
  declarations: [McqPlayerComponent],
  exports: [ McqPlayerComponent ]
})
export class McqPlayerModule { }
