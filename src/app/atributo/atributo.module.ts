import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AtributoComponent} from './atributo.component';
import {AtributoService} from './atributo.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule
  ],
  declarations: [
    AtributoComponent
  ],
  providers: [
    AtributoService
  ]
})
export class AtributoModule {

}
