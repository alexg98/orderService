import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { BaseListComponent } from '../base/components/base-list.component';
import { DialogConfig } from '../base/utilities/global';
import { SkillService } from './skill.service';
import { SkillComponent } from './skill/skill.component';
import { Skill } from '../models/business.model';
import { utils } from 'protractor';
import Utils from '../shared/utils';

@Component({
    selector: 'app-skill-list',
    templateUrl: './skill-list.component.html'
  })
export class SkillListComponent extends BaseListComponent<Skill> {

    constructor(service: SkillService ){
        super(service,
            ['name', 'estado','actions']);
    }

    openDialog(data : any){             
        this.dialog.open(SkillComponent,Utils.getDialogConfig(data));
      }
}