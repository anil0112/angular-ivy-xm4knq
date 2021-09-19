import { Component, OnInit, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

export interface candidate {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchResult: string = 'what are u waiting for';
  information: string = '';
  searchResultForMale: string = null;
  searchResultForFeMale: string = null;
  searchByText: string = null;

  candidateList: Array<candidate> = new Array<candidate>();

  ngOnInit() {
    this.candidateList = [
      {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census',
        gender: 'female',
      },
      {
        id: 2,
        first_name: 'Jeanette2',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census',
        gender: 'female',
      },
      {
        id: 3,
        first_name: 'Jeanette3',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census',
        gender: 'female',
      },
      {
        id: 4,
        first_name: 'Jeanette4',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census',
        gender: 'female',
      },
      {
        id: 5,
        first_name: 'Jeanette5',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census',
        gender: 'female',
      },
    ];
  }

  searchForm = new FormGroup({
    male: new FormControl(null),
    female: new FormControl(null),
    search: new FormControl(null),
  });

  addNewCandidate = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    male: new FormControl(null),
    female: new FormControl(null),
  });

  onSearchResult(text): void {
    const filteredData = this.candidateList.filter((x) => {
      x.id == +text ||
        x.email.includes(text) ||
        x.gender.includes(text) ||
        x.last_name.includes(text) ||
        x.email.includes(text);
    });
    // console.log(filteredData);
  }
  onSubmit() {}

  onSearch() {}
}
