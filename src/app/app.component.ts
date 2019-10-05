import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  text: string;
  items: { label: string, value: number }[] = [];

  addTextToList() {
    const randomValue =  Math.floor(Math.random() * 10) + 1;
    this.items.push({ label: this.text, value: randomValue });
    this.items = [...this.items];
  }
}
