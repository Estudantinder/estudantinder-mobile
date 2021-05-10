/* eslint-disable */

const { compilerOptions } = require('./tsconfig.json')

const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  testEnvironment: 'jsdom',
  preset: 'jest-expo',
  setupFiles: ['<rootDir>/jest/setupNavigation.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-picker|react-native-picker-select|@react-native-community|expo(nent)?|@expo(nent)?/.*|@react-native-async-storage|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
}
