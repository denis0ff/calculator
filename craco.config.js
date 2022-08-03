const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@screens': path.resolve(__dirname, 'src/screens/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
      '@App': path.resolve(__dirname, 'src/App/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
    },
  },
};
