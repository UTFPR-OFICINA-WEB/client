import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import {EstadoService} from '../estado/estado.service';
import {EstadoComponent} from './estado.component';
import {LoginService} from '../login/login.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { GrowlModule } from 'primeng/components/growl/growl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  declarations: [
    EstadoComponent
  ],
  providers: [
    EstadoService,
    ConfirmationService,
    LoginService
  ]
})
export class EstadoModule {

}
