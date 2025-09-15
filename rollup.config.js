const path = require('path');
const babel = require('@rollup/plugin-babel');
const postcss = require('rollup-plugin-postcss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const autoprefixer = require('autoprefixer');
const localResolve = require('rollup-plugin-local-resolve');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const copy = require('rollup-plugin-copy');

const pkg = require('./package.json');

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: pkg.name,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
      }
    },
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [autoprefixer],
      extract: path.resolve('dist/styles.css')
    }),
    babel({ exclude: 'node_modules/**' }),
    localResolve(),
    resolve(),
    commonjs(),
    copy({
      targets: [{ src: 'src/module.d.ts', dest: 'dist' }]
    })
  ]
};

module.exports = config;
