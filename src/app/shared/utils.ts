import { MatDialogConfig } from '@angular/material';
import { DialogConfig } from '../base/utilities/global';

export default class Utils {

    static getDialogConfig(data: any) : MatDialogConfig{ 
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = DialogConfig.disableClose;
        dialogConfig.autoFocus = DialogConfig.autoFocus;
        dialogConfig.width = DialogConfig.width;
        if(data != null){
            dialogConfig.data = data;
            console.log(data);
        }   
        return dialogConfig  
    }
    
    static getDummyClienteWithID(id){
        return {
            $key : null,
            id : id,
            name : null,
            lastName : null,
            phone : null,              
            address : '',
            email : '',
            gender : '1'
        }
    }
}