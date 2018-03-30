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

        <br/>
        <br/>

        <stb-alert context="success"> Test this now! </stb-alert>

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


      </div>
    );
  }
}
