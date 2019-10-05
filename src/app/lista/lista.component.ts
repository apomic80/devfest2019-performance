import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaComponent {

  @Input() items: { label: string, value: number }[] = [];

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
