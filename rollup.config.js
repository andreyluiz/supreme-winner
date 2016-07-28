import riot from 'rollup-plugin-riot';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'iife',
  plugins: [
    riot(),
    nodeResolve({
      jsnext: true, // if provided in ES6
      main: true, // if provided in CommonJS
      browser: true // if provided for browsers
    }),
    commonJs(),
    babel()
  ],
  dest: 'public/js/bundle.js',
}
