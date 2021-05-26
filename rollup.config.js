import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: [
        './node_modules/lit-html/lit-html.js',
        './node_modules/@vaadin/router/dist/vaadin-router.js'
    ],
    output: {
        dir: './src/lib/vendor',
        format: 'esm'
    },
    plugins: [
        nodeResolve({browser: true})
    ]
};
