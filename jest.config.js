module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
  transform: { '\\.(ts|tsx)$': 'ts-jest' },
  testPathIgnorePatterns: ['fixtures', 'functional'],
};
