import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-progress-bars',
  styleUrl: 'progress-bars.scss'
})
export class StbPageProgressBars {

  render() {
    return (
      <div class="pb-4">
        <h1>Dropdowns</h1>

        <br/>
        <br/>

        <stb-progress current={20} />

        <br/>
        <br/>

        <stb-progress current={[{current: 40, classes: 'bg-success' },{current: 10, }]} />

        <br/>
        <br/>


      </div>
    );
  }
}
