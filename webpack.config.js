module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [{ test: /\.(ts|js)$/, use: ['babel-loader', 'ts-loader'] }],
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
