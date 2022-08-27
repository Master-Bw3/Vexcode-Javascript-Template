import { babel } from '@rollup/plugin-babel';

const config = {
  input: 'src/Compiled_JS/main.js',
  output: {
    dir: 'src/Compiled_JS/bundled',
    format: 'esm'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;