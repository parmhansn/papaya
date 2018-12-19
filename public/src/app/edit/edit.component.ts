import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet = {};
  errors = {};

  constructor(private _ftservice: PetService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.getPet(params['id']);
    })
  }

  getPet(id){
    let observable = this._ftservice.getOne(id);
    observable.subscribe( data => {
      this.pet = data['shelter']
    })
  }

  update(id){
    let observable = this._ftservice.updateOne(id, this.pet);
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }else{
        this._router.navigate(['/']);
      }
    })

  }

}































// import { Component, OnInit } from '@angular/core';
// import { PetService } from '../pet.service';
// import { ActivatedRoute, Params, Router } from '@angular/router';

// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {
//   shelters = {};
//   errors = {};

//   constructor(private _ftservice: PetService, private _router: Router, private _route: ActivatedRoute) { }

//   ngOnInit() {
//     this._route.params.subscribe((params: Params)=>{
//       this.getPet(params['id']);
//     })
//   }

//   getPet(id){
//     let observable = this._ftservice.getOne(id);
//     observable.subscribe( data => {
//       this.shelters = data['shelters']
//     })
//   }

//   update(id){
//     let observable = this._ftservice.updateOne(id, this.shelters);
//     observable.subscribe( data => {
//       if (data['status']== 'not ok'){
//         this.errors = data['errors']['errors'];
//       }else{
//         this._router.navigate(['/']);
//       }
//     })

//   }

//   delete(id){
//     let observable = this._ftservice.deleteOne(id);
//     observable.subscribe( data => {
//         this._router.navigate(['/']);
//     })
//   }

// }
