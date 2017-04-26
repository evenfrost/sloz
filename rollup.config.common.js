import babel from 'rollup-plugin-babel';

export default {
  entry: 'source/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
