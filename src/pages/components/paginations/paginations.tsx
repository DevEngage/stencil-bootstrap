import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-paginations',
  styleUrl: 'paginations.scss'
})
export class StbPagePaginations {

  render() {
    return (
      <div class="pb-4">
        <h1>Pagination</h1>

        <br/>
        <br/>

        <stb-pagination>
          <ul class="pagination">
            <li class="page-item" stb-prev><a class="page-link">Previous</a></li>
            <li class="page-item" stb-page="1"><a class="page-link">1</a></li>
            <li class="page-item" stb-page="2"><a class="page-link">2</a></li>
            <li class="page-item" stb-page><a class="page-link">3</a></li>
            <li class="page-item" stb-next><a class="page-link">Next</a></li>
          </ul>
        </stb-pagination>

        <br/>
        <br/>

        <stb-pagination selected={1}>
          <ul class="pagination">
            <li class="page-item disabled"  stb-prev>
              <a class="page-link" tabindex="-1">Previous</a>
            </li>
            <li class="page-item" stb-page><a class="page-link">1</a></li>
            <li class="page-item active" stb-page>
              <a class="page-link">2 <span class="sr-only">(current)</span></a>
            </li>
            <li class="page-item" stb-page><a class="page-link">3</a></li>
            <li class="page-item" stb-next>
              <a class="page-link">Next</a>
            </li>
          </ul>
        </stb-pagination>

        <br/>
        <br/>

        <stb-code>
          {`<stb-pagination selected={1}>
  <ul class="pagination">
    <li class="page-item" stb-prev><a class="page-link">Previous</a></li>
    <li class="page-item" stb-page="1"><a class="page-link">1</a></li>
    <li class="page-item" stb-page="2"><a class="page-link">2</a></li>
    <li class="page-item" stb-page><a class="page-link">3</a></li>
    <li class="page-item" stb-next><a class="page-link">Next</a></li>
  </ul>
</stb-pagination>`}
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
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').select(1)</code></td>
            <td>Selects the page that was passed via parameters as 0-index.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').next()</code></td>
            <td>Shows the next page in the array gathered from top down priority of the page-item.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').prev()</code></td>
            <td>Shows the previous page in the array gathered from top down priority of the page-item.</td>
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
            <td><code class="highlighter-rouge">onSelect</code></td>
            <td>This event fires immediately when a page is selected.</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
