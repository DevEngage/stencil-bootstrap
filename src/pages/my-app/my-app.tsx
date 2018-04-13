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
            <stencil-route-link url='/components'><a class={`nav-link ${this.isActive('/components')}`} id="v-pills-profile-tab" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false">Components</a></stencil-route-link>
            <stencil-route-link url='/dropdowns'><a class={`nav-link ${this.isActive('/dropdowns')}`} id="v-pills-profile-tab" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false">Dropdowns</a></stencil-route-link>
            <stencil-route-link url='/navs'><a class={`nav-link ${this.isActive('/navs')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Navs</a></stencil-route-link>
            <stencil-route-link url='/modals'><a class={`nav-link ${this.isActive('/modals')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Modals</a></stencil-route-link>
            <stencil-route-link url='/carousels'><a class={`nav-link ${this.isActive('/carousels')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Carousels</a></stencil-route-link>
            <stencil-route-link url='/paginations'><a class={`nav-link ${this.isActive('/paginations')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Pagination</a></stencil-route-link>
            <stencil-route-link url='/progress-bars'><a class={`nav-link ${this.isActive('/progress-bars')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Progress</a></stencil-route-link>
            <stencil-route-link url='/alerts'><a class={`nav-link ${this.isActive('/alerts')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Alerts</a></stencil-route-link>
            <stencil-route-link url='/cards'><a class={`nav-link ${this.isActive('/cards')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Cards</a></stencil-route-link>
            <stencil-route-link url='/collapses'><a class={`nav-link ${this.isActive('/collapses')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Collapses</a></stencil-route-link>
            <stencil-route-link url='/tooltips'><a class={`nav-link ${this.isActive('/tooltips')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Tooltips</a></stencil-route-link>
            <stencil-route-link url='/popovers'><a class={`nav-link ${this.isActive('/popovers')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Popovers</a></stencil-route-link>
            <stencil-route-link url='/toggles'><a class={`nav-link ${this.isActive('/toggles')}`} id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Toggles</a></stencil-route-link>
          </div>

          <div class="col">
            <stencil-router>
              <stencil-route url='/' component='app-home' exact={true}>
              </stencil-route>

              <stencil-route url='/components' component='stb-page-components'>
              </stencil-route>

              <stencil-route url='/cards' component='stb-page-card'>
              </stencil-route>

              <stencil-route url='/dropdowns' component='stb-page-dropdowns'>
              </stencil-route>

              <stencil-route url='/navs' component='stb-page-navs'>
              </stencil-route>

              <stencil-route url='/modals' component='stb-page-modals'>
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

              <stencil-route url='/popovers' component='stb-page-popovers'>
              </stencil-route>

              <stencil-route url='/toggles' component='stb-page-toggles'>
              </stencil-route>
            </stencil-router>
          </div>
        </main>
      </div>
    );
  }
}
