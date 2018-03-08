import {Component, Prop} from '@stencil/core';


@Component({
  tag: 'stb-modal',
  styleUrl: 'stb-modal.scss'
})
export class StbModal {

  @Prop() style = 'btn';

  render() {
    return (
      <button class={this.style}>test</button>
    );
  }
}
