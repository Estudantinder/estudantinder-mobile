module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            main: './src/main',
            shared: './src/shared',
            views: './src/views',
            env: './env.ts',
            packages: './packages',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
