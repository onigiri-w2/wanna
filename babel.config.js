module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/features': './src/features',
          '@/functions': './src/functions',
          '@/hooks': './src/hooks',
          '@/lib': './src/lib',
          '@/screens': './src/screens',
          '@/types': './src/types',
          '@/utils': './src/utils',
          '@/providers': './src/providers',
          '@/storage': './src/storage',
          '@/navigations': './src/navigations',
          '@/styles': './src/styles',
          '@/domain': './src/domain',
        },
      },
    ],
  ],
};
