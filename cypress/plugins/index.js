const wp = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
  const options = {
    webpackOptions: {
      mode: 'development',
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: 'ts-loader',
                options: {
                  // skip typechecking for speed
                  transpileOnly: true
                }
              }
            ]
          }
        ]
      }
    }
  };
  on('file:preprocessor', wp(options));
};
