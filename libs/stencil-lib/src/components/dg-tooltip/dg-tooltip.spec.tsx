import { newSpecPage } from '@stencil/core/testing';
import { DgTooltip } from './dg-tooltip';

describe('dg-tooltip', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [DgTooltip],
      html: 'dg-tooltip></dg-tooltip>'
    });
    expect(root).toEqualHtml(`
      <dg-tooltip>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </dg-tooltip>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [<DgTooltip],
      html: `<dg-tooltip first="Stencil" last="'Don't call me a framework' JS"></dg-tooltip>`
    });
    expect(root).toEqualHtml(`
      <dg-tooltip first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </dg-tooltip>
    `);
  });
});
