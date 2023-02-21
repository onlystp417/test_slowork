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
        // publicPath: '/myanmar_the_last_stand/'
      }
    }
  }
};
