import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-carousels',
  styleUrl: 'carousels.scss'
})
export class StbPageCarousels {

  testImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162753624ac%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162753624ac%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
  testImage2 = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162753624b7%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162753624b7%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
  testImage3 = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162753624b8%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162753624b8%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

  render() {
    return (
      <div class="pb-4">
        <h1>Carousels</h1>

        <br/>
        <br/>

        <stb-carousel>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={this.testImage} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={this.testImage2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={this.testImage3} alt="Third slide" />
            </div>
          </div>
        </stb-carousel>

        <br/>
        <br/>

        <stb-carousel selected={1}>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={this.testImage} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={this.testImage2} alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={this.testImage3} alt="Third slide" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </stb-carousel>

        <br/>
        <br/>

        <stb-code>
          {`<stb-carousel>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={this.testImage} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.testImage2} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.testImage3} alt="Third slide" />
    </div>
  </div>
</stb-carousel>`}
        </stb-code>

        <br/>
        <br/>

        <h3>Methods</h3>
        <table class='table'>
          <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').show(1)</code></td>
            <td>Shows the carousel page that was passed via parameters as 0-index.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').hide(1)</code></td>
            <td>Hides the carousel page that was passed via parameters as 0-index.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').next()</code></td>
            <td>Shows the next page in the array gathered from top down priority of the carousel-item.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').prev()</code></td>
            <td>Shows the previous page in the array gathered from top down priority of the carousel-item.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').pause()</code></td>
            <td>Stops the slide show from cycling every X amount of time.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').play()</code></td>
            <td>Starts the cycling of the slide show every X amount of time.</td>
          </tr>
          </tbody>
        </table>

        <br/>

        <h3>Events</h3>
        <table class='table'>
          <thead>
          <tr>
            <th>Event</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><code class="highlighter-rouge">onShow</code></td>
            <td>This event fires immediately when the show instance method is called.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">onHide</code></td>
            <td>This event is fired when a carousel page has finished being hidden.</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
