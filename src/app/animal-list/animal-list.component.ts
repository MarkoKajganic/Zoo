import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Array<Object>;

  constructor() { 
    this.animals = [     
    {
      species:'Dog',
      name:'Courage',
      dateOfBirth:'2015'
    },
    {
      species:'Cat',
      name:'VivifyCat',
      dateOfBirth:'2016'
    },
    {
      species:'Snake',
      name:'Cobra',
      dateOfBirth:'2002'
    },
    {
      species:'Mouse',
      name:'shomi',
      dateOfBirth:'2017'
    },
    {
      species:'Bird',
      name:'Tica',
      dateOfBirth:''
    },
   
   ];
 }

  ngOnInit() {
  }

}
