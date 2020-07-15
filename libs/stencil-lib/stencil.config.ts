import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-lib',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/stencil-lib/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../dist/libs/stencil-lib/www',
      serviceWorker: null, // disable service workers
    },
  ],

  plugins: [sass()],
};
