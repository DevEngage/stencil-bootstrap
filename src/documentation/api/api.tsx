import {Component, Prop, Element} from '@stencil/core';


@Component({
  tag: 'stb-documentation-api',
  styleUrl: 'api.scss'
})
export class StbDocumentationApi {

  @Element() element: HTMLElement;
  @Prop() stbTitle = '';
  @Prop() details = '';
  @Prop() api = [];
  @Prop() type = '';
  @Prop() language = 'html';

  render() {
    return (
    <div>
      <h2>{this.stbTitle}</h2>

      <slot name='details'>
        <p>{this.details}</p>
      </slot>

      <ul>
        {this.api.map(api =>
          <li>{api.name}</li>
        )}
      </ul>

        <slot name='code'></slot>
    </div>
    );
  }
}
