import {Component, Prop} from '@stencil/core';


@Component({
  tag: 'sb-button',
  styleUrl: 'sb-button.scss'
})
export class SbButton {

  @Prop() style = 'btn';

  render() {
    return (
      <button class={this.style}>test</button>
    );
  }
}
