import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillComponent } from './skill/skill.component';
import { SkillService } from './skill.service';
import { SkillListComponent } from './skill-list.component';
import { MaterialAppModule } from '../ngmaterial.module';

@NgModule({
  declarations: [SkillComponent,SkillListComponent],
  imports: [
    MaterialAppModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SkillService],
  entryComponents:[SkillComponent]
})
export class SkillsModule { }
