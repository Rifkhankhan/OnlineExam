import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddExamPageRoutingModule } from './add-exam-routing.module';

import { AddExamPage } from './add-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddExamPageRoutingModule
  ],
  declarations: [AddExamPage]
})
export class AddExamPageModule {}
