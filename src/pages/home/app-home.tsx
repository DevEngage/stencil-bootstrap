import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the last bootstrap component library. Thanks to Stencil, we can now have our bootstrap components
          work everywhere; including, angular, react, vue, and the future.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
          <button class="btn">test</button>
        </stencil-route-link>
      </div>
    );
  }
}
