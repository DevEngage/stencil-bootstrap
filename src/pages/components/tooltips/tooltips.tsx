import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-tooltips',
  styleUrl: 'tooltips.scss'
})
export class StbTooltips {

  render() {
    return (
      <div class="pb-4">
        <h1>Tooltips</h1>

        <br/>
        <br/>

        <stb-tooltip>
          <button class="btn btn-secondary" type="button" data-toggle="tooltip" data-placement="top" title="Tooltip on top" aria-haspopup="true" aria-expanded="false">
           Tooltip on Top
          </button>
        </stb-tooltip>

        <br/>
        <br/>

        <stb-tooltip>
          <button class="btn btn-secondary" type="button" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom" aria-haspopup="true" aria-expanded="false">
            Tooltip on Bottom
          </button>
        </stb-tooltip>

        <br/>
        <br/>

        <stb-tooltip>
          <button class="btn btn-secondary" type="button" data-toggle="tooltip" data-placement="left" title="Tooltip on left" aria-haspopup="true" aria-expanded="false">
            Tooltip on Left
          </button>
        </stb-tooltip>

        <br/>
        <br/>

        <stb-tooltip>
          <button class="btn btn-secondary" type="button" data-toggle="tooltip" data-placement="right" title="Tooltip on right" aria-haspopup="true" aria-expanded="false">
            Tooltip on Right
          </button>
        </stb-tooltip>

        {/*<stb-tooltip placement="left-start" class="dropup">*/}
          {/*<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="tooltip" aria-haspopup="true" aria-expanded="false">*/}
            {/*Dropdown button*/}
          {/*</button>*/}
          {/*<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">*/}
            {/*<a class="dropdown-item" href="#">Action</a>*/}
            {/*<a class="dropdown-item" href="#">Another action</a>*/}
            {/*<a class="dropdown-item" href="#">Something else here</a>*/}
          {/*</div>*/}
        {/*</stb-tooltip>*/}

        {/*<br/>*/}
        {/*<br/>*/}

        {/*<stb-tooltip placement="top-start" class="btn-group dropup">*/}
          {/*<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="tooltip" aria-haspopup="true" aria-expanded="false">*/}
            {/*Dropup*/}
          {/*</button>*/}
          {/*<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">*/}
            {/*<a class="dropdown-item" href="#">Action</a>*/}
            {/*<a class="dropdown-item" href="#">Another action</a>*/}
            {/*<a class="dropdown-item" href="#">Something else here</a>*/}
          {/*</div>*/}
        {/*</stb-tooltip>*/}
      </div>
    );
  }
}
