import {Component} from '@stencil/core';

@Component({
  styleUrl: 'card.scss',
  tag: 'stb-card',
  host: {
    theme: 'card',
  }
})
export class StbCard {

  render() {
    return (
      <div>
        <slot />
      </div>
    );

  }
}
