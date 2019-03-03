import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList, SnapshotAction } from 'angularfire2/database';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from 'src/app/models/business.model';

export interface IBaseService<T>{
    findAll() : Observable<SnapshotAction<any>[]>;
    create(model: T) : void;
    update(model: T, id : string) : void;
    delete(id: string) : void;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> implements IBaseService<T>{

  ref : string;  
  public firebase: AngularFireDatabase

  list: AngularFireList<T>;

  constructor(firebase: AngularFireDatabase,ref : string) { 
    this.firebase = firebase;
    this.ref = ref;
  }
  
  findAll() : Observable<SnapshotAction<T>[]> {
    this.list = this.firebase.list(this.ref) ;
    return this.list.snapshotChanges();
  }

  create(entity : T) {
    this.list.push(entity);
  }

  update(entity : T, key : string) {
    this.list.update(key,entity);
  }

  delete(key: string) {
    this.list.remove(key);
  }

  getEntityByStart(start : string, campo, max){
    if(start.length <= max){
      return null;
    } 
    var list = this.firebase.list<T>(this.ref, ref => 
      ref.orderByChild(campo)
      .startAt(start)
      .endAt(start+'\uf8ff')   
      .limitToFirst(3))
      .snapshotChanges();
    return this.pipe(list);
  }

  pipe(list : Observable<any>) : any{
    return list.pipe(
      map(changes =>
          changes.map(value => {
              const data = value.payload.val();
              const $key = value.payload.key;
              return { $key, ...data };
          })
      )
  )
  }
}