import { Injectable } from '@angular/core';
import { MeshComponent } from 'src/app/mesh/mesh.component';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  loginCard : Card;

  constructor() {
    this.loginCard = new Card();
    this.loginCard.id = "jira-login";
    this.loginCard.title = "Login to JIRA";
    this.loginCard.body = 'body';
    this.loginCard.color = "blue";
  }

  public visit( mesh : MeshComponent ) : void
  {
    if ( !mesh.getCard( this.loginCard.id ) ) 
    {
      mesh.addCard( this.loginCard );
    }
  }
}
