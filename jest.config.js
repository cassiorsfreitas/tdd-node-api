module.exports = {
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/presentation/interfaces/**',
    '!<rootDir>/src/data/interfaces/**',
    '!<rootDir>/src/data/usecases/add-account/db-add-account.interface.ts',
    '!<rootDir>/src/presentation/controllers/signup/signup.interface.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
}
