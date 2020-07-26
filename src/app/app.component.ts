import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projecto de Angular-Yhonnatan';

  @Input() elementoid: string;

  ngOnInit() {
    if ((!this.elementoid) || this.elementoid.length != 0) {
      console.log('El codigo del elemento es' + this.elementoid);
    }
  }
}
