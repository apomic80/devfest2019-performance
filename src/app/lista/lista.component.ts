import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaComponent {

  @Input() items: { label: string, value: number }[] = [];

}
