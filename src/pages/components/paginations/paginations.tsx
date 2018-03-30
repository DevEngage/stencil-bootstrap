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

      </div>
    );
  }
}
