import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Persona } from 'src/app/entities/Persona';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  nome : string;
  cognome : string;
  numero_telefono : string;
  email : string;

  @Output() onAddPersona : EventEmitter<Persona> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newPersona : Persona = {
      nome : this.nome,
      cognome : this.cognome,
      recapito : {
        numero_telefono : this.numero_telefono,
        email : this.email
      }
    }

    this.onAddPersona.emit(newPersona);

    this.nome = '';
    this.cognome = '';
    this.numero_telefono = '';
    this.email='';
  }

}
