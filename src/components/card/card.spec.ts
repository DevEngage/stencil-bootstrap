import { render } from '@stencil/core/testing';
import { SbButton } from './sb-button';

describe('app', () => {
  it('should build', () => {
    expect(new SbButton()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [SbButton],
        html: '<sb-button></sb-button>'
      });
    });
  });
});
