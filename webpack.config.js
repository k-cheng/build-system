// this will just export a module (an object with this config)

module.exports = {
  // entry point (root) where all files 
  entry: './app/root.ts',
  // tells webpack what type of files to expect to see
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  // where to place the bundled files
  output: {
    path: './build',
    filename: 'bundle.js'
  },

  module: {
    // loaders are like plugins that transform your modules
    loaders: [
    // the loader (awesome-typescript-loader) will transform any file that matches the test regex
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  }
}