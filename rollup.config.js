import { babel } from '@rollup/plugin-babel';

const config = {
  input: 'src/js/main.js',
  output: {
    dir: 'src/js/bundled',
    format: 'esm'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;