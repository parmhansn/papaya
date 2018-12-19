import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  pet = {
    "name": '',
    "type": '',
    "description": '',
    "skills": {
      "skill1" : "",
      "skill2" : "",
      "skill3" : ""
    }
  }
  errors = {};
  constructor(private _petService: PetService, private _router: Router) { }

  ngOnInit() {
  }
  create(){
    let observable = this._petService.createPet(this.pet);
    observable.subscribe(data => {
      console.log(data);
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      } 
      else {
        this._router.navigate(['/']);
      }
    });
  }

}