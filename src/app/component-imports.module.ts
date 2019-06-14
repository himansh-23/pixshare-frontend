import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule],
    

  exports: [MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule]
})

export class ComponentImportsModule { }
