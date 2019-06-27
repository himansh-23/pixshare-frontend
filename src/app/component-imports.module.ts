import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule],
    

  exports: [MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule]
})

export class ComponentImportsModule { }
