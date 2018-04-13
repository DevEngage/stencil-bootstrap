import {Component, Prop, Element} from '@stencil/core';


@Component({
  tag: 'eng-documentation-api',
  styleUrl: 'api.scss'
})
export class EngageDocumentationApi {

  @Element() element: HTMLElement;
  @Prop() title = '';
  @Prop() details = '';
  @Prop() api = [];
  @Prop() type = '';
  @Prop() language = 'html';

  render() {
    return (
    <div>
      <h2>{this.title}</h2>

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
