import { Component, Inject } from '@angular/core';
import { Skill } from '../../models/business.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from '../../base/components/base.component';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html'
})
export class SkillComponent extends BaseComponent<Skill> {

    constructor(service: SkillService,
        dialogRef: MatDialogRef<BaseComponent<Skill>>,
        @Inject(MAT_DIALOG_DATA) data ) {
        super(service,dialogRef,data);
    }

    createForm() {
        this.form = new FormGroup({
            $key: new FormControl(null),            
            name: new FormControl('', Validators.required) ,
            estado: new FormControl(true)                     
          });
    }

  initializeFormGroup() {
    this.form.setValue({
      $key: null,     
      name: '',     
      estado : true 
    });
  }
}   