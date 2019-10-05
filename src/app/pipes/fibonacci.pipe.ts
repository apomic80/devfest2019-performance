import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibonacci'
})
export class FibonacciPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
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
