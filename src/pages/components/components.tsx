import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-components',
  styleUrl: 'components.scss'
})
export class StbPageComponents {

  render() {
    return (
      <div class="pb-4">
        <h1>Components</h1>

        <br/>
        <br/>



        <br/>
        <br/>

        <stb-card>
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </stb-card>

        <br/>
        <br/>


        <br/>
        <br/>


        <br/>
        <br/>

        <div class="pt-5">
            <p>this is the footer</p>
        </div>
      </div>
    );
  }
}
