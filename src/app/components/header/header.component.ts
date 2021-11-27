import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { UiServiceStates } from 'src/app/services/ui.service.states';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'Rubrica Angular';
  state : UiServiceStates = UiServiceStates.NONE;
  subscription : Subscription;

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(state => this.state = state);
  }

  ngOnInit(): void {
  }

  toggleAddPersona(): void{
    this.uiService.toggleAddPersona();
  }

  getColor(): string{
    switch (this.state) {
      case UiServiceStates.NONE:
        return 'green';
      case UiServiceStates.ADD:
        return 'red';  
      case UiServiceStates.UPDATE:
        return 'red';
    }
  }

  getText(): string{
    switch (this.state) {
      case UiServiceStates.NONE:
        return 'Add';
      case UiServiceStates.ADD:
        return 'Close';  
      case UiServiceStates.UPDATE:
        return 'Close';
    }
  }

}
