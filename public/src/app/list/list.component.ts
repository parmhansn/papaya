import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  shelters = [];
    constructor(private _petservice: PetService) { }
  
    ngOnInit() {
      this.getAllPets();
    }
  
    getAllPets(){
      let observable = this._petservice.getPets();
      observable.subscribe( data => {
        this.shelters = data['shelters'];
        console.log(data);
      });
    }
  
  }