import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ressults } from './results';
import { ResultsComponent } from "./results/results.component";
import { PodiumComponent } from "./podium/podium.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ResultsComponent, PodiumComponent]
})
export class AppComponent {
  title = 'angular-f1';
  results = ressults;

}
