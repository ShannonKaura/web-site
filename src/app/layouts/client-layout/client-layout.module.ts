import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientModule } from 'src/app/views/client/client.module';
import { ClientLayoutRoutingModule } from './client-layout.routing';



@NgModule({
  declarations: [
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    ClientLayoutRoutingModule,
    ClientModule
  ]
})
export class ClientLayoutModule { }
