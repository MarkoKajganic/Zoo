import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Array<Object>;

  constructor() { 
    this.animals = [
      
      new Animal('Dog', 'Courage', '2015'),
      new Animal('Cat', 'VivifyCat', '2016'),
      new Animal('Snake', 'Cobra', '2002'),
      new Animal('Mouse', 'shomi', '2017'),
      new Animal('Bird', 'Tica')

   ];
 }



 removeAnimal(animal)
 {
   let index = this.animals.indexOf(animal);
   this.animals.splice(index, 1);
 }

 moveToTop(animal)
 {
  let index = this.animals.indexOf(animal);
  this.animals.splice(index, 1);
  this.animals.unshift(animal);

 }

  ngOnInit() {
  }

}
