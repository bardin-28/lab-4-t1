import path from 'path';
import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  cache: false,
  clearMocks: true,
  collectCoverage: false,
  rootDir: '../../',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
  coverageProvider: 'v8',
  modulePaths: ['<rootDir>src'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};

export default createJestConfig(config);
