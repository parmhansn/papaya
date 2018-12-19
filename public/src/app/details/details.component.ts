import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pet: any;
  errors = {};

  constructor(private _ptservice: PetService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
      console.log(params['id']);
    });
  }
  getPet(id) {
    let observable = this._ptservice.getOne(id);
    observable.subscribe( data => {
      this.pet = data['shelter'];
      console.log(this.pet);
    });
  }

  delete(id) {
    let observable = this._ptservice.deleteOne(id);
    observable.subscribe( data => {
      this._router.navigate(['/']);
    });
  }

}

