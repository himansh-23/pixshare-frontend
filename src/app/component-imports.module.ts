import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule],

  exports: [MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule]
})

export class ComponentImportsModule { }
