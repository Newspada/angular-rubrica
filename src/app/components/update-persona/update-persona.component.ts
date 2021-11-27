import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/entities/Persona';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-update-persona',
  templateUrl: './update-persona.component.html',
  styleUrls: ['./update-persona.component.css']
})
export class UpdatePersonaComponent implements OnInit {

  @Input() persona : Persona;

  @Output() onUpdatePersona : EventEmitter<Persona> = new EventEmitter();

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newPersona : Persona = this.persona;
    this.onUpdatePersona.emit(newPersona);
    this.uiService.toggleUpdatePersona();
  }

}
