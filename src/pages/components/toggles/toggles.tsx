import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-toggles',
  styleUrl: 'toggles.scss'
})
export class StbPageToggles {

  render() {
    return (
      <div class="pb-4">
        <stb-toggle>
          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
              <input type="checkbox" checked autocomplete="off" /> Checked
            </label>
          </div>
        </stb-toggle>

        <br/>
        <br/>

        <stb-toggle selected={1}>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked /> Active
            </label>
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="option2" autocomplete="off" /> Radio
            </label>
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="option3" autocomplete="off" /> Radio
            </label>
          </div>
        </stb-toggle>

        <br/>
        <br/>

        <eng-code>
          {`<stb-toggle selected={1}>
  <div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn btn-secondary active">
      <input type="radio" name="options" id="option1" autocomplete="off" checked /> Active
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="options" id="option2" autocomplete="off" /> Radio
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="options" id="option3" autocomplete="off" /> Radio
    </label>
  </div>
</stb-toggle>`}
        </eng-code>

      </div>
    );
  }
}
