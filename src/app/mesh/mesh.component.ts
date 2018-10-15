import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card';
import { JiraService } from '../jira.service';

@Component({
  selector: 'app-mesh',
  templateUrl: './mesh.component.html',
  styleUrls: ['./mesh.component.css']
})
export class MeshComponent implements OnInit {

  cards : Card[];
  jira : JiraService;

  constructor( jira : JiraService ) {
    this.cards = [];
    this.jira = jira;
  }

  ngOnInit() {
    setInterval( () => { this.jira.visit( this ); }, 1000 );
  }

  /**
   * addCard
   */
  public addCard( card : Card ) : void
  {
    console.log( "Adding card [" + card.title + "]" );
    this.cards = this.cards.concat( card );
  }

  /**
   * getCard
   */
  public getCard( id : string ) : Card
  {
    return this.cards.filter( card => card.id == id )[0];
  }
}
