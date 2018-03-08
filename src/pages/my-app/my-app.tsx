import {Component, Prop} from '@stencil/core';
import {RouterHistory} from '@stencil/router'

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop() history: RouterHistory;

  getLocation() {
    console.log(location.pathname);
    return location.pathname;
  }

  isActive(path) {
    return path === this.getLocation() ? 'active' : '';
  }
  //
  // changePage(page = '/') {
  //   console.log(this.history)
  //   this.history.push(page, {});
  // }

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

          <div class="nav flex-column nav-pills col-md-3 pt-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class={`nav-link ${this.isActive('/')}`} id="v-pills-home-tab" data-toggle="pill" href="/" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
            <a class={`nav-link ${this.isActive('/components')}`} id="v-pills-profile-tab" data-toggle="pill"  href="/components" role="tab" aria-controls="v-pills-profile" aria-selected="false">Components</a>
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
