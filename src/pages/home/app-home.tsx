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

        <h2>Getting Started</h2>
        <p>We have only created components that either required jQuery/javascript or made sense to have as a wrapper like <span class='text-light bg-secondary px-1'>{`<card></card>`}</span>.</p>
        <p>
          We designed the stencil bootstrap (stb) components to work with existing bootstrap examples where the inner portions of code should just work from the bootstrap documentation page.
          We did add examples and references on how to use stb. Good luck and have fun!
        </p>
      </div>
    );
  }
}
