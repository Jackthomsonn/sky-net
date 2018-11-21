import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.html'
})

export class ButtonComponent {
  @Input() color: string;
  @Input() textColor: string;

  constructor() {
  }

  public applyStyle = () => {
    return {
      background: this.color,
      color: this.textColor
    }
  }
}
