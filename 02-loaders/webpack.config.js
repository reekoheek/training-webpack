module.exports = function (_, { mode = 'production' }) {
  return {
    mode,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
  };
}
