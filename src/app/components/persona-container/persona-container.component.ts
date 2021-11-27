import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/entities/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { UiService } from 'src/app/services/ui.service';
import { UiServiceStates } from 'src/app/services/ui.service.states';

@Component({
  selector: 'app-persona-container',
  templateUrl: './persona-container.component.html',
  styleUrls: ['./persona-container.component.css']
})
export class PersonaContainerComponent implements OnInit {

  elencoPersona: Persona[];
  state : UiServiceStates = UiServiceStates.NONE;
  subscription : Subscription;
  UiServiceStates = UiServiceStates;
  personaToUpdate : Persona;

  constructor(private personaService: PersonaService, private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(state => this.state = state);
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((elencoPersona) => this.elencoPersona = elencoPersona);
  }

  deletePersona(persona: Persona) {
    this.personaService.deletePersona(persona).subscribe(() => (this.elencoPersona = this.elencoPersona.filter(p => (p.id !== persona.id))));
  }

  toggleUpdatePersona(persona: Persona) {
    this.uiService.toggleUpdatePersona();
    this.personaToUpdate = persona;
  }

  updatePersona(persona: Persona) {
    this.personaService.updatePersona(persona).subscribe();
  }

  addPersona(persona : Persona){
    this.personaService.addPersona(persona).subscribe(() => (this.elencoPersona.push(persona)));
  }
}
