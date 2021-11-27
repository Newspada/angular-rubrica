import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UiServiceStates } from './ui.service.states';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private state : UiServiceStates = UiServiceStates.NONE;
  private subject = new Subject<UiServiceStates>();
  constructor() { }

  toggleAddPersona(): void{
    if(this.state == UiServiceStates.NONE)
      this.state = UiServiceStates.ADD;
    else
      this.state = UiServiceStates.NONE;
    this.subject.next(this.state);
  }

  toggleUpdatePersona(): void{
    if(this.state != UiServiceStates.UPDATE)
      this.state = UiServiceStates.UPDATE;
    this.subject.next(this.state);
  }

  onToggle(): Observable<UiServiceStates>{
    return this.subject.asObservable();
  }
}


