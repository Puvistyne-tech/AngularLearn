/**
 * Import the members of the Angular core library that are needed in this component.
 */
import { Component } from '@angular/core';

/**
 * @Component is a decorator function that specifies the Angular metadata for the component.
 * The CLI generated three metadata properties:
 * 1. selector— the component's CSS element selector
 * 2. templateUrl— the location of the component's template file.
 * 3. styleUrls— the location of the component's private CSS styles.
 *
 * This is the decorator of this component app.
 */
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * This is the class of this component.
 */
export class AppComponent {
  title = 'Angular: Getting Started';
}
