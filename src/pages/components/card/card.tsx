import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-card',
  styleUrl: 'card.scss'
})
export class StbPageCards {

  render() {
    return (
      <div class="pb-4">
        <h1>Alerts</h1>

        <eng-documentation-api></eng-documentation-api>

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

        <eng-code>
          {`<stb-card>
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</stb-card>`}
        </eng-code>


      </div>
    );
  }
}
