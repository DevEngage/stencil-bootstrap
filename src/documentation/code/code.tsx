import {Component, Prop, Element} from '@stencil/core';

declare var hljs;
declare var ClipboardJS;

@Component({
  tag: 'stb-code',
  styleUrl: 'code.scss'
})
export class StbCode {

  @Element() element: HTMLElement;
  @Prop() language = 'html';
  clipboard;

  componentDidLoad() {
    const element = this.element.querySelector('code');
    hljs.highlightBlock(element);
    this.clipboard = new ClipboardJS(this.element.querySelector('.clip-code'), {
      target: () => {
        return element;
      }
    });
  }

  componentDidUnload() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }

  // loadLibs() {
  //   const imported = document.createElement('script');
  //   imported.src = '/path/to/imported/script';
  //   document.head.appendChild(imported);
  // }

  render() {
    return (
    <div>
      <div class="language-title" style={{backgroundColor: 'purple', color: 'white'}}>
        <span>{this.language.toUpperCase()}</span>
        <button class='btn clip-code'>Copy to clipboard</button>
      </div>
      <pre><code class={`${this.language}`}>
        <slot/>
      </code></pre>
    </div>
    );
  }
}
