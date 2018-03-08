import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-components',
  styleUrl: 'components.scss'
})
export class StbPageComponents {

  openModal() {
    const modal = document.querySelector('stb-modal');
    console.log(modal);
    modal.show();
  }

  render() {
    return (
      <div>
        <h1>Components</h1>

        <h2>Modals</h2>

        <button class="btn" onClick={this.openModal}>Open Modal</button>

        <stb-modal>
          <div slot="modal-dialog" class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </stb-modal>

      </div>
    );
  }
}
