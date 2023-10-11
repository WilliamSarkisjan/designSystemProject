import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-button',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss'],
})
export class AtomButtonComponent {
  @Input() buttonText: string = 'Button';
}
