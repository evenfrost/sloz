import commonConfig from './rollup.config.common';

export default Object.assign({}, commonConfig, {
  format: 'es',
  dest: 'build/sloz.esm.js',
});
