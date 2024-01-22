import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { FontSize20Directive } from './font-size-20.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    FontSize20Directive,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    FontSize20Directive
  ]
})
export class SharedModule { }
