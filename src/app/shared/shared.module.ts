import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchBoxComponent
  ]
})
export class SharedModule { }
