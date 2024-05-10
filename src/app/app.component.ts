import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { EventBindComponent } from './components/event-bind/event-bind.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent, EventBindComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "mikepapp";


  person0 = {
  
    givenName : "Mike",
    surName : "Pappas",
    age : 30,
    email: 'gg@yahoo.gr',
    address: "skiph 13"

    

  
};
}


