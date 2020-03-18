import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { Person } from './../models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.componet.html',
  styles: []
})
export class AppComponent {
  public title: string = 'Cadastro Simplificado de Pessoas';
  public statisticsHidden: boolean = true;
  public people: Array<Person> = [];
  public youngerPerson: Person;
  public oldPerson: Person;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(70),
      ])],

      age: ['', Validators.required],
    });

    this.people.push(
      {name: 'Meliodas da Ira', age: 3000},
      {name: 'Merlin da Gula', age: 1500},
      {name: 'Ban da Ganância', age: 200},
    );

    this.setYoungerAndOldPerson();
  }

  addPerson() {
    // const name = this.form.controls['name'].value;
    const { name, age=0 } = this.form.value;
    const person = new Person(name, age);
    this.people.push(person);

    this.formClean();
    this.setYoungerAndOldPerson();
  }

  removePerson(person: Person) {
    const index = this.people.indexOf(person);
    this.people.splice(index, 1);
    this.setYoungerAndOldPerson();
  }

  setYoungerAndOldPerson() {
    const ages = this.people.map( ({age}) => age );

    const maxAge = Math.max(...ages);
    const minAge = Math.min(...ages);

    this.youngerPerson = this.people.find(({ age }) => age === maxAge);
    this.oldPerson = this.people.find(({ age }) => age === minAge);
  }

  formClean() {
    this.form.reset();
  }
}