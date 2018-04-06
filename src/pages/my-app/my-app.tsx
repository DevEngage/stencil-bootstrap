import {Component, Prop} from '@stencil/core';
import {RouterHistory} from '@stencil/router'

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop() history: RouterHistory;

  getLocation() {
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
            <a class={`nav-link ${this.isActive('/dropdowns')}`} id="v-pills-profile-tab" data-toggle="pill"  href="/dropdowns" role="tab" aria-controls="v-pills-profile" aria-selected="false">Dropdowns</a>
            <a class={`nav-link ${this.isActive('/navs')}`} id="v-pills-profile-tab" data-toggle="pill"  href="/navs" role="tab" aria-controls="v-pills-profile" aria-selected="false">Navs</a>
            <a class={`nav-link ${this.isActive('/carousels')}`} id="v-pills-profile-tab" data-toggle="pill"  href="/carousels" role="tab" aria-controls="v-pills-profile" aria-selected="false">Carousels</a>
            <a class={`nav-link ${this.isActive('/paginations')}`} id="v-pills-profile-tab" data-toggle="pill"  href="/paginations" role="tab" aria-controls="v-pills-profile" aria-selected="false">Pagination</a>
            <a class={`nav-link ${this.isActive('/progress-bars')}`} id="v-pills-profile-tab" data-toggle="pill"  href="/progress-bars" role="tab" aria-controls="v-pills-profile" aria-selected="false">Progress</a>
            <a class={`nav-link ${this.isActive('/alerts')}`} id="v-pills-profile-tab" data-toggle="pill"  href="/alerts" role="tab" aria-controls="v-pills-profile" aria-selected="false">Alerts</a>
            <a class={`nav-link ${this.isActive('/collapses')}`} id="v-pills-profile-tab" data-toggle="pill"  href="/collapses" role="tab" aria-controls="v-pills-profile" aria-selected="false">Collapses</a>
            <a class={`nav-link ${this.isActive('/tooltips')}`} id="v-pills-profile-tab" data-toggle="pill"  href="/tooltips" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tooltips</a>
          </div>

          <div class="col">
            <stencil-router>
              <stencil-route url='/' component='app-home' exact={true}>
              </stencil-route>

              <stencil-route url='/components' component='stb-page-components'>
              </stencil-route>

              <stencil-route url='/dropdowns' component='stb-page-dropdowns'>
              </stencil-route>

              <stencil-route url='/navs' component='stb-page-navs'>
              </stencil-route>

              <stencil-route url='/carousels' component='stb-page-carousels'>
              </stencil-route>

              <stencil-route url='/paginations' component='stb-page-paginations'>
              </stencil-route>

              <stencil-route url='/progress-bars' component='stb-page-progress-bars'>
              </stencil-route>

              <stencil-route url='/alerts' component='stb-page-alerts'>
              </stencil-route>

              <stencil-route url='/collapses' component='stb-page-collapses'>
              </stencil-route>

              <stencil-route url='/tooltips' component='stb-page-tooltips'>
              </stencil-route>
            </stencil-router>
          </div>
        </main>
      </div>
    );
  }
}
