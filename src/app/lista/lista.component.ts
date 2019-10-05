import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent  {

  text: string;
  items: { label: string, value: number }[] = [];

  addTextToList() {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    this.items.push({ label: this.text, value: randomValue });
  }

  generateValue(value: number) {
    console.log('value ' + value + ' generated');
    return this.fibonacci(value * 4);
  }

  private fibonacci(num: number): number {
    if (num === 1 || num === 2) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

}
