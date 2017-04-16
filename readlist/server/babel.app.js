process.env.NODE_ENV = 'development';

require("babel-core/register")(
  {
    presets: ['stage-3','es2015']
  }
);

require("babel-polyfill")

require("./bin/www")
