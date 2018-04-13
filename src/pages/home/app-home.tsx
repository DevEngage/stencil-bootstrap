import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <h1>Welcome!</h1>
        <p>
          Welcome to the last bootstrap component library. Thanks to Stencil, we can now have our bootstrap components
          work everywhere; including, angular, react, vue, and the future.
        </p>
      </div>
    );
  }
}
