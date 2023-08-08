const config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'json',
    'text',
    'html'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = config
