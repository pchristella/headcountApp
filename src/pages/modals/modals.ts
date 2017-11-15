import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, Observable } from 'angularfire2/database';
//import { Observable } from 'angularfire2/database/observable';
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
//public staffDept     : any     = [];
//public staffTelno    : any     = '';
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
      //'telno' 	    : ['', Validators.minLength(10)],
      'remark' 	    : ['', Validators.maxLength(100)],
      'name'         : ['', Validators.required],
      //'dept'	    : ['', Validators.required],
      'present'	    : ['']
   });

   this.staffs = this._FIRE.list('/staffs');


   if(params.get('isEdited'))
   {
       let staff 		= params.get('staff'),
           k;

       this.staffName      = staff.name;
       //this.staffDept	     = staff.dept;
       //this.staffTelno     = staff.telno;
       this.staffPresent   = staff.present;
       this.staffRemark    = staff.remark;
       this.staffId        = staff.$key;


       // for(k in staff.dept)
       // {
       //    this.staffDept.push(staff.dept[k].name);
       // }
       //
       //
       // for(k in staff.present)
       // {
       //    this.staffPresent.push(staff.present[k].name);
       // }

       this.isEditable      = true;
   }
}



saveStaff(val)
{
   let name	    : string	= this.form.controls["name"].value,
       remark   : string 	= this.form.controls["remark"].value,
       //telno    : number	= this.form.controls["telno"].value,
       //dept    : any       = this.form.controls["dept"].value,
       present    : boolean	    = this.form.controls["present"].value,
       // departments     : any       = [],
       //presence    : any       = [],
       // k         : any;


 // for(k in dept)
 // {
 //    departments.push({
 //       "name" : dept[k]
 //    });
 // }
 //
 //
 // for(k in present)
 // {
 //    presence.push({
 //       "name" : present[k]
 //    });
 // }


if(this.isEditable)
{
   this.staffs.update(this.staffId, {
      name    : name,
      //telno   : telno,
      remark  : remark,
      //dept    : departments,
      present : present
   });
}
else
{
   this.staffs.push({
     name    : name,
     //telno   : telno,
     remark  : remark,
     //dept    : departments,
     present : present
   });
}

  this.closeModal();
}



closeModal()
{
   this.viewCtrl.dismiss();
}


}
