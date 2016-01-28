import React from 'react';
import Form from '../component/form';
import Page from '../component/page';


let Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  componentDidMount() {

  },
  render() {
    return (
      <div class="pages navbar-through toolbar-through">
        <Page>
            <div className="content-block-title">
              Welcome To My Awesome App
            </div>
            <div className="content-block">
              <div className="content-block-inner">
                <p>
                  Couple of worlds here because my app is so awesome!
                </p>
                <p>
                  Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.
                </p>
                <p>
                  <a href="/more">More Page...</a>
                </p>
              </div>
            </div>
            <div className="content-block-title">
              What about simple navigation?
            </div>
            <div className="list-block">
              <ul>
                  <li>
                    <a href="#about" className="item-link">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">About</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="item-link">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">Services</div>
                        </div>
                      </div>
                    </a>
                  </li>
              </ul>
            </div>
            <div className="content-block-title">
              Side panels
            </div>
            <div className="content-block">
              <div className="row">
                <div className="col-50">
                  <a
                    href="#"
                    data-panel="left"
                    className="button open-panel">
                    Left Panel
                  </a>
                </div>
                <div className="col-50">
                  <a
                    href="#"
                    data-panel="right"
                    className="button open-panel">
                    Right Panel
                  </a>
                </div>
              </div>
            </div>
       </Page>
        {/* About Page*/}
        <Page name="about" cached>
            <div className="content-block">
              <p>
                You may go <a href="#" className="back">back</a> or load <a href="#services">Services</a> page.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel commodo massa, eu adipiscing mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ultricies dictum neque, non varius tortor fermentum at. Curabitur auctor cursus imperdiet. Nam molestie nisi nec est lacinia volutpat in a purus. Maecenas consectetur condimentum viverra. Donec ultricies nec sem vel condimentum. Phasellus eu tincidunt enim, sit amet convallis orci. Vestibulum quis fringilla dolor.  </p>
              <p>
                Mauris commodo lacus at nisl lacinia, nec facilisis erat rhoncus. Sed eget pharetra nunc. Aenean vitae vehicula massa, sed sagittis ante. Quisque luctus nec velit dictum convallis. Nulla facilisi. Ut sed erat nisi. Donec non dolor massa. Mauris malesuada dolor velit, in suscipit leo consectetur vitae. Duis tempus ligula non eros pretium condimentum. Cras sed dolor odio.
              </p>
              <p>
                Suspendisse commodo adipiscing urna, a aliquet sem egestas in. Sed tincidunt dui a magna facilisis bibendum. Nunc euismod consectetur lorem vitae molestie. Proin mattis tellus libero, non hendrerit neque eleifend ac. Pellentesque interdum velit at lacus consectetur scelerisque et id dui. Praesent non fringilla dui, a elementum purus. Proin vitae lacus libero. Nunc eget lectus non mi iaculis interdum vel a velit. Nullam tincidunt purus id lacus ornare, at elementum turpis euismod. Cras mauris enim, congue eu nisl sit amet, pulvinar semper erat. Suspendisse sed mauris diam.
              </p>
              <p>
                Nam eu mauris leo. Pellentesque aliquam vehicula est, sed lobortis tellus malesuada facilisis. Fusce at hendrerit ligula. Donec eu nibh convallis, pulvinar enim quis, lacinia diam. Ut semper ac magna nec ornare. Integer placerat justo sed nunc suscipit facilisis. Vestibulum ac tincidunt augue. Duis eu aliquet mauris, vel luctus mauris. Nulla non augue nec diam pharetra posuere at in mauris.
              </p>
            </div>
        </Page>
        {/* Services Page*/}
        <Page name="services" cached>
            <div className="content-block">
              <p>
                You may go <a href="#" className="back">back</a> or load <a href="#about">About</a> page.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel commodo massa, eu adipiscing mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ultricies dictum neque, non varius tortor fermentum at. Curabitur auctor cursus imperdiet. Nam molestie nisi nec est lacinia volutpat in a purus. Maecenas consectetur condimentum viverra. Donec ultricies nec sem vel condimentum. Phasellus eu tincidunt enim, sit amet convallis orci. Vestibulum quis fringilla dolor.  </p>
              <p>
                Mauris commodo lacus at nisl lacinia, nec facilisis erat rhoncus. Sed eget pharetra nunc. Aenean vitae vehicula massa, sed sagittis ante. Quisque luctus nec velit dictum convallis. Nulla facilisi. Ut sed erat nisi. Donec non dolor massa. Mauris malesuada dolor velit, in suscipit leo consectetur vitae. Duis tempus ligula non eros pretium condimentum. Cras sed dolor odio.
              </p>
              <p>
                Suspendisse commodo adipiscing urna, a aliquet sem egestas in. Sed tincidunt dui a magna facilisis bibendum. Nunc euismod consectetur lorem vitae molestie. Proin mattis tellus libero, non hendrerit neque eleifend ac. Pellentesque interdum velit at lacus consectetur scelerisque et id dui. Praesent non fringilla dui, a elementum purus. Proin vitae lacus libero. Nunc eget lectus non mi iaculis interdum vel a velit. Nullam tincidunt purus id lacus ornare, at elementum turpis euismod. Cras mauris enim, congue eu nisl sit amet, pulvinar semper erat. Suspendisse sed mauris diam.
              </p>
              <p>Nam eu mauris leo. Pellentesque aliquam vehicula est, sed lobortis tellus malesuada facilisis. Fusce at hendrerit ligula. Donec eu nibh convallis, pulvinar enim quis, lacinia diam. Ut semper ac magna nec ornare. Integer placerat justo sed nunc suscipit facilisis. Vestibulum ac tincidunt augue. Duis eu aliquet mauris, vel luctus mauris. Nulla non augue nec diam pharetra posuere at in mauris.   </p>
            </div>
        </Page>

      </div>
    );
  }
});

export default Home;
