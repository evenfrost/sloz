import uglify from 'rollup-plugin-uglify';
import commonConfig from './rollup.config.common';

export default Object.assign({}, commonConfig, {
  format: 'cjs',
  dest: 'build/sloz.js',
  plugins: [
    ...commonConfig.plugins,
    uglify(),
  ],
});
