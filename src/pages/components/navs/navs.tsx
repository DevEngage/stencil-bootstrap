import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-navs',
  styleUrl: 'navs.scss'
})
export class StbPageNavs {

  render() {
    return (
      <div class="pb-4">
        <h1>Navs</h1>

        <br/>
        <br/>
        <h2>What to know</h2>
        <p>
          Navs are still structured the same as bootstrap with one big difference. You will now use {`stb-nav`} as a wrapper.
          We are only going to cover the differences here.  If you want to learn more about Navs then go to <a
          href="https://getbootstrap.com/docs/4.1/components/navs/">Bootstrap Navs</a>
        </p>

        <br/>
        <br/>


        <h3>Tabs Example</h3>
        <stb-nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
          </div>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">tab page 1</div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">tab page 2</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">tab page 3</div>
          </div>
        </stb-nav>

        <br/>

        <eng-code>
          {`<stb-nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
      href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
      href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab"
      href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home"
      role="tabpanel" aria-labelledby="nav-home-tab">tab page 1</div>
    <div class="tab-pane fade" id="nav-profile"
      role="tabpanel" aria-labelledby="nav-profile-tab">tab page 2</div>
    <div class="tab-pane fade" id="nav-contact"
      role="tabpanel" aria-labelledby="nav-contact-tab">tab page 3</div>
  </div>
</stb-nav>`}
        </eng-code>

        <br/>
        <br/>

        <h3>Pills Example</h3>

        <stb-nav>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">tab pill 1</div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">tab pill 2</div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">tab pill 3</div>
          </div>
        </stb-nav>

        <br/>

        <eng-code>
          {`<stb-nav>
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="pills-home-tab" data-toggle="pill"
        href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="pills-profile-tab" data-toggle="pill"
        href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="pills-contact-tab" data-toggle="pill"
        href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home"
      role="tabpanel" aria-labelledby="pills-home-tab">tab pill 1</div>
    <div class="tab-pane fade" id="pills-profile"
      role="tabpanel" aria-labelledby="pills-profile-tab">tab pill 2</div>
    <div class="tab-pane fade" id="pills-contact"
      role="tabpanel" aria-labelledby="pills-contact-tab">tab pill 3</div>
  </div>
</stb-nav>`}
        </eng-code>

        <br/>
        <br/>

        {/*<stb-nav>*/}
          {/*<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">*/}
            {/*<a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>*/}
            {/*<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>*/}
            {/*<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>*/}
            {/*<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>*/}
          {/*</div>*/}
          {/*<div class="tab-content" id="v-pills-tabContent">*/}
            {/*<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">side tab pill 1</div>*/}
            {/*<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">side tab pill 2</div>*/}
            {/*<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">side tab pill 3</div>*/}
            {/*<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">side tab pill 4</div>*/}
          {/*</div>*/}
        {/*</stb-nav>*/}

        {/*<br/>*/}
        <br/>
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
          {/*<tr>*/}
            {/*<td><code class="highlighter-rouge">document.querySelector('element | class | id').toggle()</code></td>*/}
            {/*<td>Toggles the nav page given.</td>*/}
          {/*</tr>*/}
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').show(1)</code></td>
            <td>Shows the nav page that was passed via parameters as 0-index.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').hide(1)</code></td>
            <td>hides the nav page that was passed via parameters as 0-index.</td>
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
            <td>This event is fired when a nav page has finished being hidden.</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
