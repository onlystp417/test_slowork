const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@COM': '@/components',
      '@HOOK': '@/hook'
    },
    configure: {
      output: {
        // publicPath: process.env === 'product ? '/myanmar_the_last_stand/' : '',
      }
    }
  }
};
