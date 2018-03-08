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

  open2ndModal() {
    const modal: any = document.querySelector('#second-modal');
    console.log(modal);
    modal.show();
  }

  closeModal() {
    const modal = document.querySelector('stb-modal');
    console.log(modal);
    modal.hide();
  }

  close2ndModal() {
    const modal: any = document.querySelector('#second-modal');
    console.log(modal);
    modal.hide();
  }

  render() {
    return (
      <div>
        <h1>Components</h1>

        <h2>Modals</h2>

        <button class="btn" onClick={this.openModal}>Open Modal</button>
        <br/>
        <br/>
        <button class="btn" onClick={this.open2ndModal}>Open 2nd Modal</button>

        <stb-modal>
          <div slot="modal-dialog" class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" onClick={this.closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" onClick={this.closeModal}>Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </stb-modal>

        <stb-modal id="second-modal">
          <div slot="modal-dialog" class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title 2</h5>
              <button type="button" class="close" onClick={this.close2ndModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" onClick={this.close2ndModal}>Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </stb-modal>
      </div>
    );
  }
}
