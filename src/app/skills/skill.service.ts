import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseService } from '../base/services/base.service';
import { Skill } from '../models/business.model';

@Injectable({
    providedIn: 'root'
  })
export class SkillService extends BaseService<Skill> {
    
    constructor(firebase: AngularFireDatabase){
        super(firebase, 'skills');        
    }
}