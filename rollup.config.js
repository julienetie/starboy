import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    moduleName: 'starboy',
    entry: 'index.js',
    plugins: [
        babel({
            babelrc: false,
            presets: 'es2015-rollup'
        }),
        nodeResolve({
            jsnext: true,
            main: true
        })
    ],
    format: 'umd',
    dest: 'dist/starboy.js'
};
