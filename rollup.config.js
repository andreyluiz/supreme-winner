import riot from 'rollup-plugin-riot';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

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
    babel({
      exclude: 'node_modules/**'
    }),
    sass({
      include: [
        'src/scss/default.scss'
      ],
      output: (output) => {
        console.log(output);
      }
    })
  ],
  dest: 'public/js/bundle.js',
}
