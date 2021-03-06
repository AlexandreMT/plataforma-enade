import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {AssociacaoComponent} from './associacao/associacao.component';
import {LoadingComponent} from '../utils/loading/loading.component';
import {ModalModule, TooltipModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TooltipModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AssociacaoComponent
  ]
})
export class AssociacaoModule { }
