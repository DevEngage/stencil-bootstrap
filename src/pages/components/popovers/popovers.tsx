import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-popovers',
  styleUrl: 'popovers.scss'
})
export class StbPopovers {

  render() {
    return (
      <div class="pb-4">
        <h1>Popovers</h1>

        <br/>
        <br/>

        <stb-popover>
          <button class="btn btn-secondary" data-toggle="popover" data-placement="top" title="Popover on top" data-content="And here's some amazing content. It's very engaging. Right?" aria-haspopup="true" aria-expanded="false">
            Popover on Top
          </button>
        </stb-popover>

        <br/>
        <br/>

        <stb-popover>
          <button class="btn btn-secondary" data-toggle="popover" data-placement="bottom" title="Popover on bottom" aria-haspopup="true" aria-expanded="false">
            Popover on Bottom
          </button>
        </stb-popover>

        <br/>
        <br/>

        <stb-popover>
          <button class="btn btn-secondary" data-toggle="popover" data-placement="right" data-content="Popover on right" aria-haspopup="true" aria-expanded="false">
            Popover on Right
          </button>
        </stb-popover>

        <br/>
        <br/>

        <stb-popover>
          <button class="btn btn-secondary" data-toggle="popover" data-placement="left" data-content="Popover on left" aria-haspopup="true" aria-expanded="false">
            Popover on Left
          </button>
        </stb-popover>

        <br/>
        <br/>

        <stb-code>
          {`<stb-popover>
  <button class="btn btn-secondary" data-toggle="popover" data-placement="top"
    title="Popover on top" data-content="And here's some amazing content. It's very engaging. Right?"
    aria-haspopup="true" aria-expanded="false">
    Popover on Top
  </button>
</stb-popover>

<stb-popover>
  <button class="btn btn-secondary" data-toggle="popover" data-placement="bottom"
    title="Popover on bottom" aria-haspopup="true" aria-expanded="false">
    Popover on Bottom
  </button>
</stb-popover>

<stb-popover>
  <button class="btn btn-secondary" data-toggle="popover" data-placement="right"
    data-content="Popover on right" aria-haspopup="true" aria-expanded="false">
    Popover on Right
  </button>
</stb-popover>

<stb-popover>
  <button class="btn btn-secondary" data-toggle="popover" data-placement="left"
    data-content="Popover on left" aria-haspopup="true" aria-expanded="false">
    Popover on Left
  </button>
</stb-popover>`}
        </stb-code>
      </div>
    );
  }
}
