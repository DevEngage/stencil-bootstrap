import { Component } from '@stencil/core';
// import '@stencil/sass'
import '@stencil/router'

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            {/*<img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />*/}
              Stencil Bootstrap
          </a>
        </nav>

        <main class="container row">

          <div class="nav flex-column nav-pills col-md-3 pt-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="/components" role="tab" aria-controls="v-pills-profile" aria-selected="false">Components</a>
            {/*<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>*/}
            {/*<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>*/}
          </div>

          <div class="col">
            <stencil-router>
              <stencil-route url='/' component='app-home' exact={true}>
              </stencil-route>

              <stencil-route url='/components' component='stb-page-components'>
              </stencil-route>
            </stencil-router>
          </div>
        </main>
      </div>
    );
  }
}
