const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(vtt|mp3|mp4|png|jpg|gif|svg|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[ext]"
            }
          }
        ]
      });
  
      return config;
    }
  });
  