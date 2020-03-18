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
  public people: Array<Person> = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(70),
      ])]
    });

    this.people.push(
      {name: 'Meliodas da Ira'},
      {name: 'Merlin da Gula'},
      {name: 'Ban da Ganância'},
    )
  }

  addPerson() {
    // const name = this.form.controls['name'].value;
    const { name } = this.form.value;
    const person = new Person(name);
    this.people.push(person);

    this.formClean();
  }

  formClean() {
    this.form.reset();
  }
}
