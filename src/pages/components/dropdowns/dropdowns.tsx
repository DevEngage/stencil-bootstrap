import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-dropdowns',
  styleUrl: 'dropdowns.scss'
})
export class StbPageDropdowns {

  render() {
    return (
      <div class="pb-4">
        <h1>Dropdowns</h1>

        <br/>
        <br/>

        <h2>Single button</h2>
        <p>
          Any single .btn can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either {`<button>`} elements:
        </p>

        <stb-dropdown>
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </stb-dropdown>

        <br/>
        <br/>

        <eng-code>
          {`<stb-dropdown>
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Dropdown link
  </button>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</stb-dropdown>`}
        </eng-code>

        <br/>
        <br/>
        <p>And with {`<a>`} elements:</p>
        <br/>
        <br/>

        <stb-dropdown>
          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </stb-dropdown>

        <br/>

        <eng-code>
          {`<div class="dropdown">
  <a
    class="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`}
        </eng-code>

        <br/>
        <br/>

        <p>The best part is you can do this with any button variant, too:</p>
        <br/>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Primary
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Secondary
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Success
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Info
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Warning
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Danger
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>


        <eng-code>
          {`<!-- Example single danger button -->
<div class="btn-group">
  <button
    type="button"
    class="btn btn-danger dropdown-toggle"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>`}
        </eng-code>

        <br/>
        <br/>

        <br/>
        <br/>

        <h2>Split button</h2>

        <br/>
        <p>
          Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of .dropdown-toggle-split for proper spacing around the dropdown caret.
        </p>

        <p>
          We use this extra class to reduce the horizontal padding on either side of the caret by 25% and remove the margin-left that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.
        </p>
        <br/>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>


        <eng-code>
          {`<!-- Example split danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button
    type="button"
    class="btn btn-danger dropdown-toggle dropdown-toggle-split"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>`}
        </eng-code>

        <br/>
        <br/>

        <h2>Sizing</h2>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-secondary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Large Button
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown class="btn-group m-2">
          <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Small Button
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <eng-code>
          {`<!-- Large button-->
<stb-dropdown class="btn-group m-2">
  <button
    type="button"
    class="btn btn-secondary btn-lg dropdown-toggle"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Large Button
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</stb-dropdown>

<!-- Small button-->
<stb-dropdown class="btn-group m-2">
  <button
    type="button"
    class="btn btn-secondary btn-sm dropdown-toggle"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Small Button
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</stb-dropdown>`}
        </eng-code>

        <br/>
        <br/>

        <h2>Directions</h2>
        <h3>Dropup</h3>
        <p>Trigger dropdown menus above elements by adding .dropup to the parent element.</p>

        <stb-dropdown placement="top-start" class="btn-group dropup m-2">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropup
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown placement="top-start" class="btn-group dropup m-2">
          <button type="button" class="btn btn-secondary">
            Split dropup
          </button>
          <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <eng-code>
          {`<!-- Default dropup button -->
<stb-dropdown placement="top-start" class="btn-group dropup">
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Dropup
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</stb-dropdown>

<!-- Split dropup button -->
<stb-dropdown placement="top-start" class="btn-group dropup">
  <button type="button" class="btn btn-secondary">
    Split dropup
  </button>
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</stb-dropdown>`}
        </eng-code>
        <br/>
        <br/>

        <h3>Dropright</h3>
        <p>Trigger dropdown menus at the right of the elements by adding .dropright to the parent element.</p>

        <stb-dropdown placement="right-start" class="btn-group dropright m-2">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropright
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown placement="right-start" class="btn-group dropright m-2">
          <button type="button" class="btn btn-secondary">
            Split dropright
          </button>
          <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <eng-code>
          {`<!-- Default dropright button -->
<stb-dropdown placement="right-start" class="btn-group dropright">
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Dropright
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</stb-dropdown>

<!-- Split dropright button -->
<stb-dropdown placement="right-start" class="btn-group dropright">
  <button type="button" class="btn btn-secondary">
    Split dropright
  </button>
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</stb-dropdown>`}
        </eng-code>
        <br/>
        <br/>


        <h3>Dropleft</h3>
        <p>Trigger dropdown menus at the left of the elements by adding .dropleft to the parent element.</p>

        <stb-dropdown placement="left-start" class="btn-group dropleft m-2">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropleft
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </stb-dropdown>

        <stb-dropdown placement="left-start" class="btn-group m-2">
          <div class="btn-group dropleft" role="group">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <button type="button" class="btn btn-secondary">
            Split dropleft
          </button>
        </stb-dropdown>

        <eng-code>
          {`<!-- Default dropleft button -->
<stb-dropdown placement="left-start" class="btn-group dropleft">
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Dropleft
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</stb-dropdown>

<!-- Split dropleft button -->
<stb-dropdown placement="left-start" class="btn-group m-2">
  <div class="btn-group dropleft" role="group">
    <button
      type="button"
      class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <button type="button" class="btn btn-secondary">
    Split dropleft
  </button>
</stb-dropdown>`}
        </eng-code>
        <br/>
        <br/>

        <h2>Dropdown options</h2>
        <br/>
        <h3>Options</h3>
        <table>
          <thead>
            <th>Name</th>
          </thead>
          <tbody>
            <tr>
              <td>offset (coming soon)</td>
            </tr>
            <tr>
              <td>data-reference (coming soon)</td>
            </tr>
          </tbody>
        </table>

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
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').toggle()</code></td>
            <td>Toggles the dropdown menu of a given navbar or tabbed navigation.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').show()</code></td>
            <td>Shows dropdown menu.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').hide()</code></td>
            <td>Hides dropdown menu.</td>
          </tr>
          </tbody>
        </table>

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
            <td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
