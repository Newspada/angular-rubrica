import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Persona } from 'src/app/entities/Persona';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-persona-item',
  templateUrl: './persona-item.component.html',
  styleUrls: ['./persona-item.component.css']
})
export class PersonaItemComponent implements OnInit {
  @Input() persona: Persona;
  @Output() onDeletePersona = new EventEmitter<Persona>();
  @Output() onUpdatePersona = new EventEmitter<Persona>();

  faTimes = faTimes;
  faWrench = faWrench;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDelete(){
    this.onDeletePersona.emit(this.persona);
  }

  onToggleUpdate(){
    this.onUpdatePersona.emit(this.persona);
  }
}
