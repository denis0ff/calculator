const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@App': path.resolve(__dirname, 'src/App'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
