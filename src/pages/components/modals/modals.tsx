import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-modals',
  styleUrl: 'modals.scss'
})
export class StbPageModals {

  openModal() {
    const modal: any = document.querySelector('stb-modal');
    modal.show();
  }

  closeModal() {
    const modal: any = document.querySelector('stb-modal');
    modal.hide();
  }

  openLongModal() {
    const modal: any = document.querySelector('#long-modal');
    modal.show();
  }

  closeLongModal() {
    const modal: any = document.querySelector('#long-modal');
    modal.hide();
  }

  render() {
    return (
      <div class="pb-4">
        <h2>Modals</h2>

        <button class="btn m-1" onClick={this.openModal}>Open Modal</button>
        <button class="btn m-1" onClick={this.openLongModal}>Open Long Modal</button>

        <br/>
        <eng-code language='typescript'>
          {`import {Component} from '@stencil/core';

@Component({
  tag: 'page'
})
class Page {

 openLongModal() {
    const modal: any = document.querySelector('stb-modal');
    modal.show();
  }

  closeLongModal() {
    const modal: any = document.querySelector('stb-modal');
    modal.hide();
  }

  render() {
    return (
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
    );
  }
}`}
        </eng-code>



        <stb-modal>
          <div class="modal-dialog" role="document">
            <div class="modal-content">
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
          </div>
        </stb-modal>

        <stb-modal id="long-modal">
          <div class="modal-dialog" role="document">

            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title 2</h5>
                <button type="button" class="close" onClick={this.closeLongModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={this.closeLongModal}>Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </stb-modal>

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
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').toggle()</code></td>
            <td>Toggles the modal.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').show()</code></td>
            <td>Shows the modal.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').hide()</code></td>
            <td>hides the modal.</td>
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
            <td>This event is fired when a modal page has finished being hidden.</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
