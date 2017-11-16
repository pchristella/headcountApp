import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, Observable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

public form          : any;
public staffs        : Observable<any[]>;
public staffName     : any     = '';
public staffPresent  : boolean = false;
public staffRemark   : any     = '';
public staffId       : string  = '';
public isEditable    : boolean = false;


constructor(
   public navCtrl        : NavController,
   public params         : NavParams,
   private _FB 	        : FormBuilder,
   private _FIRE         : AngularFireDatabase,
   public viewCtrl       : ViewController
)

{
   this.form 	    = _FB.group({
      'remark' 	    : ['', Validators.maxLength(100)],
      'name'         : ['', Validators.required],
      'present'	    : ['']
   });

   this.staffs = this._FIRE.list('/staffs');


   if(params.get('isEdited'))
   {
       let staff 		= params.get('staff'),

       this.staffName      = staff.name;
       this.staffPresent   = staff.present;
       this.staffRemark    = staff.remark;
       this.staffId        = staff.$key;
       this.isEditable      = true;
   }
}



saveStaff(val)
{
   let name	    : string	= this.form.controls["name"].value,
       remark   : string 	= this.form.controls["remark"].value,
       present  : boolean	= this.form.controls["present"].value

if(this.isEditable)
{
   this.staffs.update(this.staffId, {
      name    : name,
      remark  : remark,
      present : present
   });
}
else
{
   this.staffs.push({
     name    : name,
     remark  : remark,
     present : present = true
   });
}

  this.closeModal();
}



closeModal()
{
   this.viewCtrl.dismiss();
}


}
