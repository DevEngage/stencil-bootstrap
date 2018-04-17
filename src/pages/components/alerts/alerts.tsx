import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-alerts',
  styleUrl: 'alerts.scss'
})
export class StbPageAlerts {

  render() {
    return (
      <div class="pb-4">
        <h1>Alerts</h1>

        <stb-alert context="success"> A simple primary alert—check it out! </stb-alert>
        <br/>
        <br/>
        <stb-alert context="secondary"> A simple secondary alert—check it out! </stb-alert>

        <br/>
        <br/>

        <stb-alert class="alert-warning alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </stb-alert>

        <br/>
        <br/>

        <eng-code>
          {`<stb-alert context="success"> A simple primary alert—check it out! </stb-alert>
<stb-alert context="secondary"> A simple secondary alert—check it out! </stb-alert>
`}
        </eng-code>

        <eng-code>
          {`<stb-alert class="alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</stb-alert>`}
        </eng-code>

        <br/>


      </div>
    );
  }
}
